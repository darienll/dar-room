import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({name:'tokens'})
export class Token {

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => User, user => user.id)
    userId: number;

    @Column()
    token: string;
   
}