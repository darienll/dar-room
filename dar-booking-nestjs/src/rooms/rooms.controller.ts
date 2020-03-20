import { Controller, Get, Body, Post } from "@nestjs/common";
import { RoomService } from "./rooms.service";
import { Room } from "src/models/Room";

@Controller('rooms')
export class RoomsConrtoller {
    constructor(private readonly roomService: RoomService) {}
    @Get()
    getAll() {
        return this.roomService.getAll();
    }
    @Post()
    create(@Body() room) {
        return this.roomService.create(room);
    }
}