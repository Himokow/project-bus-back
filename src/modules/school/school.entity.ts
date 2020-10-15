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

    @Column({default:'#fff'})
    color:string;

    @OneToMany(type => ChildrenEntity, child => child.school, {onDelete:'CASCADE'})
     children : ChildrenEntity[]
}