import { Module } from '@nestjs/common';
import { StopService } from './stop.service';
import { StopController } from './stop.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import {StopEntity} from "./stop.entity";

@Module({
  providers: [StopService],
  imports:[TypeOrmModule.forFeature([StopEntity])],
  controllers: [StopController]
})
export class StopModule {}
