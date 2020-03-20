import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Room } from "src/models/Room";

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room)
        private readonly roomsRepository: Repository<Room>
    ) {}
    getAll() {
        return this.roomsRepository.find();
    }
    create(room: Room) {
        return this.roomsRepository.save(room);
    }
}