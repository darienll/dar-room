import { Controller, Get, Body, Post, Param, Res, HttpStatus } from "@nestjs/common";
import { UserService } from "./users.service";
import { Response } from 'express';

import { User } from "src/models/User";
import { Token } from "src/models/Token";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}
    @Get()
    getAll() {
        return this.userService.getAll();
    }
    @Get(':id')
    getUser(@Param('id') id:number) {
        return this.userService.getUser(id);
    }
    @Post()
    create(@Body() user) {
        return this.userService.create(user);
    }
    @Get('/meetings/:id')
    getUsersByMeeting(@Param('id') meetingId:number) {
        return this.userService.getByMeeting(meetingId);
    }
    @Post('/auth')
    auth(@Body() user) {
        return this.userService.auth(user);

    }

}