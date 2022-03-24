import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [AppController, TasksController],  //es necesario en este archivo lo que vaya creando en mi aplicacion, parecido a Angular
  providers: [AppService, TasksService],
})
export class AppModule { }
