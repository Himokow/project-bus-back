import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn} from "typeorm";

@Entity()
export class ChildrenEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    // @ManyToMany(type => StopEntity)
    // @JoinColumn()
    // stop:string;
    //
    // @ManyToMany(type => SchoolEntity)
    // @JoinColumn()
    // school:string;

    @Column("text",{array:true})
    phone:string[];


}