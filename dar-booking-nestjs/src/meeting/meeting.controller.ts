import { Controller, Get, Body, Post, Param } from "@nestjs/common";
import { MeetingService } from "./meeting.service";
@Controller('meetings')
export class MeetingConrtoller {
    constructor(private readonly meetingService: MeetingService) {}
    @Get()
    getAll() {
        return this.meetingService.getAll();
    }
    @Post()
    create(@Body() meeting) {
        (meeting)
        return this.meetingService.create(meeting);
    }
    @Get(':id')
    getMeetingsByRoom(@Param('id') roomId: number) {
        return this.meetingService.getByRoom(roomId);
    }
    
    
}