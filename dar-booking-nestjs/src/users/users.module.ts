import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../models/User";
import { Token } from "src/models/Token";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Token])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [UsersController],
    providers: [UserService]
})
export class UsersModule {

}