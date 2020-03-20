import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'rooms'})
export class Room {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;

    @Column({default: null})
    imageUrl: string;

}