import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Meeting } from "./Meeting";

@Entity({name:'users'})
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @OneToMany(type => Meeting, meeting => meeting.creator)
    meetings_created: Meeting[];
}