import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, ManyToOne} from "typeorm";
import {StopEntity} from "../stop/stop.entity";
import {SchoolEntity} from "../school/school.entity";

@Entity()
export class ChildrenEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(type => StopEntity, stop => stop.id)
    @JoinColumn({name:"stop_id"})
    stop:StopEntity;

    @ManyToOne(type => SchoolEntity, school => school.id)
    @JoinColumn({name:"school_id"})
    school:SchoolEntity;

    @Column("text",{array:true})
    phone:string[];

    @Column({default:false})
    back:boolean;

}