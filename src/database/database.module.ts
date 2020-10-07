import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import {ChildrenEntity} from "../modules/children/children.entity";

@Module({
    imports: [TypeOrmModule.forRoot({
        type:'postgres',
        host:'localhost',
        port: 5432,
        username:'postgres',
        password:'root',
        database:'project-bus',
        entities:[ChildrenEntity],
        synchronize:true
    })]
})
export class DatabaseModule {}
