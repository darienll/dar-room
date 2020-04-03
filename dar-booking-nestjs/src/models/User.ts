import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Meeting } from "./Meeting";

@Entity({name:'users'})
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(type => Meeting, meeting => meeting.creator)
    meetings_created: Meeting[];
}