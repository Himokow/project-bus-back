import { Injectable } from '@nestjs/common';
import { InjectRepository} from "@nestjs/typeorm"
import {SchoolEntity} from "./school.entity";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";


@Injectable()
export class SchoolService extends TypeOrmCrudService<SchoolEntity> {
    constructor(@InjectRepository(SchoolEntity) repo) {
        super(repo)
    }
}
