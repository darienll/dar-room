import { Injectable } from "@nestjs/common";
import { InjectRepository, InjectConnection } from "@nestjs/typeorm";
import { Repository, Connection, getRepository } from "typeorm";
import { User } from "../models/User";
import { Meeting } from "src/models/Meeting";

@Injectable()
export class UserService {
    constructor( 
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @InjectConnection()
        private connection: Connection
    ) {}
    getAll() {
        return this.usersRepository.find();   
    }
    create(user : User) {
        return this.usersRepository.save(user);
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
}