import { Controller, Get, Body, Post, Param } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}
    @Get()
    getAll() {
        return this.userService.getAll();
    }
    @Post()
    create(@Body() user) {
        return this.userService.create(user);
    }
    @Get('/meetings/:id')
    getUsersByMeeting(@Param('id') meetingId:number) {
        console.log("in meetings users")
        return this.userService.getByMeeting(meetingId);
    }

}