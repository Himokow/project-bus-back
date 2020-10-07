import { Injectable } from '@nestjs/common';
import {StopEntity} from "./stop.entity";
import { InjectRepository} from "@nestjs/typeorm"
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";


@Injectable()
export class StopService extends TypeOrmCrudService<StopEntity> {
    constructor(@InjectRepository(StopEntity) repo) {
        super(repo)
    }
}