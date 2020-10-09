import { Injectable } from '@nestjs/common';
import {ChildrenEntity} from "./children.entity";
import { InjectRepository} from "@nestjs/typeorm"
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {getConnection, Repository, UpdateResult} from "typeorm";

@Injectable()
export class ChildrenService extends TypeOrmCrudService<ChildrenEntity>{
    constructor(@InjectRepository(ChildrenEntity) repo:Repository<ChildrenEntity>) {
        super(repo)
    }

    async findAll():Promise<ChildrenEntity[]>{
        try{
            return this.repo
                .createQueryBuilder('c')
                .leftJoinAndSelect('c.school','school')
                .leftJoinAndSelect('c.stop','stop')
                .orderBy('c.lastName','ASC')
                .getMany()
        } catch (e){
            return e
        }
    }

    async addChild(c):Promise<ChildrenEntity[]>{
            return this.repo.save(c).then(async() => {
                return await this.findAll()
            })
    }

    async uncheckAll():Promise<ChildrenEntity[]>{
            return this.repo
            .createQueryBuilder()
            .update(ChildrenEntity)
            .set({back:false,present:false})
            .execute()
                .then(async()  =>  {
                    return await this.findAll()
                })
    }
}
