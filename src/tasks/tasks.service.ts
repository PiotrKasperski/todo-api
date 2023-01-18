import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  tasks = new Array<Task>();
  create(createTaskDto: CreateTaskDto) {
    const newTask: Task = {
      id: this.tasks.length,
      description: createTaskDto.description,
      isDone: false,
    };
    this.tasks.push(newTask);
    return newTask.id;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find((task) => {
      return task.id === id;
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index] = { ...this.tasks[index], ...updateTaskDto };
    return this.tasks[index];
  }

  remove(id: number) {
    this.tasks.forEach((task, index) => {
      if (task.id === id) {
        this.tasks.splice(index, 1);
        return true;
      }
    });
  }
}
