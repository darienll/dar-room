import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MeetingConrtoller } from "./meeting.controller";
import { MeetingService } from "./meeting.service";
import { Meeting } from "src/models/Meeting";
import { Room } from "src/models/Room";

@Module({
    imports: [
        TypeOrmModule.forFeature([Meeting, Room])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers:
    [
         MeetingConrtoller,
    ],
    providers: [MeetingService]
})
export class MeetingsModule {

}