import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn} from "typeorm";

@Entity()
export class SchoolEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;
}