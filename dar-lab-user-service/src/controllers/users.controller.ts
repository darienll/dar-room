import exporess, { Router, Request, Response } from "express";
import { Controller } from './controllers.types';
import User from '../models/User';
import Token from '../models/Token';


import bcrypt from 'bcrypt';

class UsersController implements Controller{

    private router: Router
    
    initRoutes() {
        this.router = exporess.Router();
        this.router.get('/', this.getUsers);
        this.router.post('/', this.createUser);
        this.router.post('/auth', this.auth);
        return this.router;
    }

    getUsers(req: Request, res: Response) {
        User.findAll()
            .then(results => {
                res.json(results);
            }).catch((err: any) => {
                res.status(500).json(err);
            });
    }   

    createUser(req: Request, res: Response) {
        const { username, firstName, lastName, password } = req.body;
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                res.status(500).json(err);
            }
            User.create({username, firstName, lastName, password: hash})
                .then(result => {
                    res.json(result);
                }).catch((err: any) => {
                    res.status(500).json(err);
                });
        });
    }

    auth(req: Request, res: Response) {
        const { username, password } = req.body;
        User.scope('withPassword').findOne({where: {username}})
            .then(user => {
                if (!user) {
                    return res.status(405).json({error: 'User not found'});
                }
                bcrypt.compare(password, user.password, async (err, result: boolean) => {
                    
                    if (err) {
                        res.status(500).json(err);
                        return;
                    } 

                    if (result) {
                        const UIDGenerator = require('uid-generator');
                        const uidgen = new UIDGenerator();
                        const token = await uidgen.generate();
                        Token.create({userId: user.id, token})
                            .then(savedToken => {
                                res.json({status: 'success', token});
                            }).catch((tokenErr: any) => {
                                res.status(500).json(tokenErr);
                            });

                    } else {
                        res.status(401).json({status: 'error'});
                    }

                });
            })
            .catch((err: any) => {
                res.status(401).json(err);
            });
    }
}

export default UsersController;
