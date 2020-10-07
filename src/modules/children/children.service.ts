import { Injectable } from '@nestjs/common';
import {ChildrenEntity} from "./children.entity";
import { InjectRepository} from "@nestjs/typeorm"
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";

@Injectable()
export class ChildrenService extends TypeOrmCrudService<ChildrenEntity>{
    constructor(@InjectRepository(ChildrenEntity) repo) {
        super(repo)
    }
}
