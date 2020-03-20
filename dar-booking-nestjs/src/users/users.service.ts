import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../models/User";

@Injectable()
export class UserService {
    constructor( 
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) {}
    getAll() {
        return this.usersRepository.find();   
    }
}