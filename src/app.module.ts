import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ChildrenModule } from './modules/children/children.module';
import { StopModule } from './modules/stop/stop.module';
import { SchoolController } from './modules/school/school.controller';
import { SchoolService } from './modules/school/school.service';
import { SchoolModule } from './modules/school/school.module';

@Module({
  imports: [DatabaseModule, ChildrenModule, StopModule, SchoolModule],
  controllers: [AppController, SchoolController],
  providers: [AppService, SchoolService],
})
export class AppModule {}
