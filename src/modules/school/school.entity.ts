import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, OneToMany} from "typeorm";
import {ChildrenEntity} from "../children/children.entity";

@Entity()
export class SchoolEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({default:''})
    address: string;

    @OneToMany(type => ChildrenEntity, child => child.school)
     children : ChildrenEntity[]
}