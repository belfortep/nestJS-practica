import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';
@Injectable()
export class TasksService {
    tasks: Task[] = [
        {
            id: 1,
            title: "title",
            description: "description",
            done: true
        },
        {
            id: 2,
            title: "title2",
            description: "description2",
            done: false
        }
    ]

    getTasks(): Task[] {
        return this.tasks
    }
    getTask(id: number): Task {

        return this.tasks.find(task => task.id === id)
    }

}
