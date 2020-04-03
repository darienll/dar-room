import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Meeting } from "./Meeting";

@Entity({name: 'rooms'})
export class Room {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;

    @Column({default: null})
    imageUrl: string;

    @OneToMany(type => Meeting, meeting => meeting.room)
    meetings: Meeting[];

}