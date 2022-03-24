import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { Request, Response } from 'express'
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {

    }
    @Get()  //crea una ruta con el metodo get
    getTasks(): Task[] {    //como funciona con typescripts, puedo decir que tipo de dato me tiene que devolver
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') taskId: string) {
        return this.taskService.getTask(parseInt(taskId));
    }

    /*getTasks(@Req() req, @Res() res) {
        //funciona como express
        return res.send('Hola')
    }*/

    @Post()
    createTask(@Body() task: createTaskDto): string {
        console.log(task)
        return 'creating task...'
    }

    @Put(':id')
    updateTask(@Body() task: createTaskDto, @Param('id') id): string {
        return 'updating task...'
    }

    @Delete(':id')//pasando parametros, el que esta entre comillas en el @param('') tiene que ser igual al que le paso como url
    deleteTask(@Param('id') id): string {
        console.log(id)
        return 'deleting task...' + id
    }

}
