import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Room } from "./Room";
import { User } from "./User";

@Entity()
export class Meeting {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column({ type: "datetime" })
    startTime: string;

    @Column({type: "datetime"})
    endTime: string;
    // reference to Users
    @ManyToOne(type => User, user => user.id, {eager : true})
    creator: User;
    // reference to Room 
    @ManyToOne(type => Room, room => room.id, {eager : true})
    room: Room;

    @ManyToMany(type => User)
    @JoinTable()
    participants: User[];
}