import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
// import { TaskService } from './task/task.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CacheModule.register({
      ttl: 5000,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // TaskService
  ],
})
export class AppModule {}
