import { Component, ElementRef, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { TaskAdd } from '../task-add/task-add';
import { TaskItem } from '../task-item/task-item';
import { Task, TaskDTO } from '../../models/task';
import { getTasks } from '../../data/task-data';
import { JsonPipe } from '@angular/common';
import { TaskForm } from "../task-form/task-form";

@Component({
  selector: 'ind-task-list',
  imports: [TaskAdd, TaskItem, JsonPipe, TaskForm],
  template: `
    <details #addTaskDetails>
      <summary>Add Task</summary>
      <ind-task-add
      [parentElement]="element().nativeElement"
      (eventAdd)="handleAdd($event)"/>
    </details>

    <details #addTaskDetails2>
      <summary>Add Task Form</summary>
      <ind-task-form
      [parentElement]="element2().nativeElement"
      (eventAdd)="handleAdd($event)"/>
    </details>

    <h3>Lista de tareas</h3>

    <div class="task-list">
      @for (task of tasks(); track task.id) {
        <ind-task-item
          [task]="task"
          (eventDelete)="handleDelete($event)"
          (eventUpdate)="handleUpdate($event)"
        />
      }
    </div>

    <div>
      <hr />
      tasks:
      <pre>
      {{ tasks() | json }}
      </pre
      >
    </div>
  `,
  styles: `
    .task-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  `,
})
export class TaskList implements OnInit, OnDestroy {
  tasks = signal<Task[]>([]);

  // @ViewChild("addTaskDetails", {
  //   static: true,
  // }) element!: ElementRef<HTMLDetailsElement>;

  element = viewChild.required<ElementRef<HTMLDetailsElement>>('addTaskDetails');
  element2 = viewChild.required<ElementRef<HTMLDetailsElement>>('addTaskDetails2');

  constructor() {
    console.log('task-list constructor!');
    console.log(this.tasks());
    console.log(this.element) // undefined
  }

  ngOnInit(): void {


    console.log('task-list ngOnInit');
    console.log(this.element) // defined

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    getTasks().then((t) => {
      this.tasks.set(t);
      console.log(this.tasks());
    });

  }
  ngOnDestroy(): void {
    console.log(' task-list ngOnDestroy');
  }

  handleDelete(task: Task) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== task.id));
  }

  handleUpdate(task: Task) {
    this.tasks.update((tasks) => tasks.map((t) => (t.id === task.id ? task : t)));
  }

  handleAdd(taskData: TaskDTO) {
    // Asignar un ID nuevo
    const newId = this.tasks().length
      ? Math.max(...this.tasks().map((t) => Number(t.id) || 0)) + 1
      : 1;
    const task: Task = {
      id: newId,
      ...taskData
      // title: taskData.title,
      // owner: taskData.owner,
      // isCompleted: taskData.isCompleted
    };
    this.tasks.update((tasks) => [...tasks, task]);
  }
}
