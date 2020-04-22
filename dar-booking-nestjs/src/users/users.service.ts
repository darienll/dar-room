import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository, InjectConnection } from "@nestjs/typeorm";
import { Repository, Connection, getRepository } from "typeorm";
import { User } from "../models/User";
import { Meeting } from "src/models/Meeting";
import { Token } from "src/models/Token";
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
    constructor( 
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @InjectRepository(Token)
        private readonly tokensRepository: Repository<Token>
        
    ) {}
    getAll() {
        return this.usersRepository.find();   
    }
    getUser(id: number) {
        (id);
        return this.usersRepository.findOne(id);
    }
    async generateToken(user: User) {
        const UIDGenerator = require('uid-generator');
            const uidgen = new UIDGenerator();
            const token = await uidgen.generate();
            let newToken = {
                'userId' : user.id,
                'token': token
            }
            let data3 = await this.tokensRepository.save(newToken)
                .then(savedToken => {
                    return savedToken;
                }).catch((tokenErr: any) => {
                    return { err: { statusCode: tokenErr } }
                });
            return data3;
    }
    async create(user : User) {
        let newUser;
        let hash = await bcrypt.hash(user.password, 10);
        let userWithUsername = await this.usersRepository.findOne({'username' : user.username});
        if (userWithUsername != undefined) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
              }, HttpStatus.FORBIDDEN);
        }
        newUser = {
            'username' : user.username,
            'firstName' : user.firstName,
            'lastName' : user.lastName,
            'password' : hash

        }
        let savedUser =  await this.usersRepository.save(newUser);
        let token = await this.generateToken(savedUser);
        
        return token;
        
        
    }
    getByMeeting(id : number) {
        const users =  
            getRepository(Meeting)
            .createQueryBuilder("meeting")
            .where("meeting.id = :id" , { id })
            .leftJoinAndSelect("meeting.participants", "user")
            .getOne()
        return users;
    }

    async auth(user: User) {
        let data = await this.usersRepository.findOne({where: { username: user.username }})
        let data2 = await bcrypt.compare(user.password, data.password)
        let data3;
        if (data2) {
            const UIDGenerator = require('uid-generator');
            const uidgen = new UIDGenerator();
            const token = await uidgen.generate();
            let newToken = {
                'userId' : data.id,
                'token': token
            }
            data3 = await this.tokensRepository.save(newToken)
                .then(savedToken => {
                    return savedToken;
                }).catch((tokenErr: any) => {
                    return { err: { statusCode: tokenErr } }
                });
        }
        return data3;
      
    }
    
}