import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import {ChildrenEntity} from "../modules/children/children.entity";
import {SchoolEntity} from "../modules/school/school.entity";
import {StopEntity} from "../modules/stop/stop.entity";

@Module({
    imports: [TypeOrmModule.forRoot({
        type:'postgres',
        url:process.env.DATABASE_URL ||  'postgres://postgres:root@localhost:5432/project-bus',
        entities:[ChildrenEntity,SchoolEntity,StopEntity],
        synchronize:true
    })]
})
export class DatabaseModule {}
