import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
// TODO Reformular como una lista de tareas

task1: ITask = {
  title: "Task 1",
  description: "Descripcion 1",
  completed: false,
  level: Levels.Info

}

task2: ITask = {
  title: "Task 2",
  description: "Descripcion 2",
  completed: false,
  level: Levels.Info

}

task3: ITask = {
  title: "Task 3",
  description: "Descripcion 3",
  completed: true,
  level: Levels.Info

}

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask) {
    // TODO Sustituir con un Splice para eliminar en la lista de tareas
    alert(`Se procede a eliminar la tarea ${task.title}`)
  }
}
