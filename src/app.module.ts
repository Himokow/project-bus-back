import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ChildrenModule } from './modules/children/children.module';
import { StopModule } from './modules/stop/stop.module';
import { SchoolModule } from './modules/school/school.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [DatabaseModule, ChildrenModule, StopModule, SchoolModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
