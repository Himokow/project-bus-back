import { Module } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { ChildrenController } from './children.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import {ChildrenEntity} from "./children.entity";

@Module({
  providers: [ChildrenService],
  imports:[TypeOrmModule.forFeature([ChildrenEntity])],
  controllers: [ChildrenController]
})
export class ChildrenModule {}
