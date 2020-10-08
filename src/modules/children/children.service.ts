import { Injectable } from '@nestjs/common';
import {ChildrenEntity} from "./children.entity";
import { InjectRepository} from "@nestjs/typeorm"
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {Repository} from "typeorm";

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
                .getMany()
        } catch (e){
            return e
        }
    }
}
