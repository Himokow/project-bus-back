import { Injectable } from '@nestjs/common';
import {ChildrenEntity} from "./children.entity";
import {Repository} from "typeorm";
import { InjectRepository} from "@nestjs/typeorm"

@Injectable()
export class ChildrenService {
    constructor(@InjectRepository(ChildrenEntity) private readonly childrenRepository : Repository<ChildrenEntity>) {
    }

    findAll(): Promise<ChildrenEntity[]>{
        return this.childrenRepository.find()
    }


}
