import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn} from "typeorm";

@Entity()
export class StopEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({default:''})
    address: string;
}