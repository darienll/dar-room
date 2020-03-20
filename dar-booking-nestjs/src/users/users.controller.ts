import { Controller, Get, Body } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}
    @Get()
    getAll() {
        return this.userService.getAll();
    }
    

}