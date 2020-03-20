import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../models/User";

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [UsersController],
    providers: [UserService]
})
export class UsersModule {

}