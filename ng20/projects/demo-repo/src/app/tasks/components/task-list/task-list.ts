import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { TaskAdd } from '../task-add/task-add';
import { TaskItem } from '../task-item/task-item';
import { Task, TaskDTO } from '../../models/task';

import { JsonPipe } from '@angular/common';
import { TaskForm } from "../task-form/task-form";
import { InMemoryRepo } from '../../services/in-memory-repo';
import { LocalRepo } from '../../services/local-repo';

@Component({
  selector: 'ind-task-list',
  imports: [TaskAdd, TaskItem, JsonPipe, TaskForm],
  providers: [
    { provide: InMemoryRepo, useClass: LocalRepo}
  ],
  template: `
    <details #addTaskDetails>
      <summary>Add Task</summary>
      <ind-task-add
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
export class TaskList implements OnInit {
  tasks = signal<Task[]>([]);

  // @ViewChild("addTaskDetails", {
  //   static: true,
  // }) element!: ElementRef<HTMLDetailsElement>;

  element = viewChild.required<ElementRef<HTMLDetailsElement>>('addTaskDetails');
  element2 = viewChild.required<ElementRef<HTMLDetailsElement>>('addTaskDetails2');
  private repo = inject(InMemoryRepo);

  ngOnInit(): void {
    this.repo.getAll().then((t) => {
      this.tasks.set(t);
      console.log(this.tasks());
    });

  }

  handleDelete(task: Task) {
    this.repo.delete(task.id).then(() => {
      this.tasks.set(this.repo.data);
    });
    // this.tasks.update((tasks) => tasks.filter((t) => t.id !== task.id));
  }

    async handleDelete2(task: Task) {
      await this.repo.delete(task.id)
      this.tasks.set(await this.repo.getAll());
    // this.tasks.update((tasks) => tasks.filter((t) => t.id !== task.id));
  }

  handleUpdate(task: Task) {
  this.repo.update(task.id, task).then(() => {
      this.tasks.set(this.repo.data);
    });
    // this.tasks.update((tasks) => tasks.map((t) => (t.id === task.id ? task : t)));
  }


  handleAdd(taskData: TaskDTO) {
    this.repo.add(taskData).then(() => {
      this.tasks.set(this.repo.data);
      this.element().nativeElement.open = false;
      this.element2().nativeElement.open = false;
    });
    // // Asignar un ID nuevo
    // const newId = this.generateId();
    // const task: Task = {
    //   id: newId,
    //   ...taskData
    //   // title: taskData.title,
    //   // owner: taskData.owner,
    //   // isCompleted: taskData.isCompleted
    // };
    // this.tasks.update((tasks) => [...tasks, task]);
  }
}

