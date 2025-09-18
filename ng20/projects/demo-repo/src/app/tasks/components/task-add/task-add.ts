import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskDTO } from '../../models/task';

const INITIAL_TASK: TaskDTO = {
  title: '',
  owner: '',
  isCompleted: false,
};

@Component({
  selector: 'ind-task-add',
  imports: [FormsModule],
  template: `
    <input type="text" placeholder="Title" [(ngModel)]="newTask.title" />
    <input type="text" placeholder="Owner" [(ngModel)]="newTask.owner" />
    <button (click)="addTask()">Add Task</button>
  `,
  styles: ``,
})
export class TaskAdd {
  newTask: TaskDTO = {...INITIAL_TASK};

  parentElement = input.required<HTMLDetailsElement>();
  eventAdd = output<TaskDTO>();

  addTask() {
    console.log('Adding task', this.newTask);
    this.eventAdd.emit(this.newTask);
    this.newTask = INITIAL_TASK;
    console.log("Final task", this.newTask);

    this.parentElement().removeAttribute('open');
  }
}
