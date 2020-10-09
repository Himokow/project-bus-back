import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import {ChildrenEntity} from "../modules/children/children.entity";
import {SchoolEntity} from "../modules/school/school.entity";
import {StopEntity} from "../modules/stop/stop.entity";

@Module({
    imports: [TypeOrmModule.forRoot({
        type:'postgres',
        host:process.env.HEROKU_DB_HOST || 'localhost',
        port: parseInt(process.env.HEROKU_DB_PORT) || 5432,
        username:process.env.HEROKU_DB_USERNAME ||'postgres',
        password:process.env.HEROKU_DB_PASSWORD ||'root',
        database:process.env.HEROKU_DB_NAME || 'project-bus',
        entities:[ChildrenEntity,SchoolEntity,StopEntity],
        synchronize:true
    })]
})
export class DatabaseModule {}
