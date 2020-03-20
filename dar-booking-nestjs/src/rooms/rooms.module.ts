import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Room } from "src/models/Room";
import { RoomsConrtoller } from "./rooms.controller";
import { RoomService } from "./rooms.service";
import { UploadController } from "./uploader.conrtoller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Room])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers:
    [
         RoomsConrtoller,
         UploadController
    ],
    providers: [RoomService]
})
export class RoomsModule {

}