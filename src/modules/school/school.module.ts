import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import {SchoolService} from "./school.service";
import {SchoolEntity} from "./school.entity";
import {SchoolController} from "./school.controller";

@Module({
    providers: [SchoolService],
    imports:[TypeOrmModule.forFeature([SchoolEntity])],
    controllers: [SchoolController]
})
export class SchoolModule {}
