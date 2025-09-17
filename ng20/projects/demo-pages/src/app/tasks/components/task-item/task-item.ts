import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'ind-task-item',
  imports: [],
  template: `
    <div [title]=" 'ID: ' + task().id ">
      <h4>{{ task().title }}</h4>
      <p>{{ task().owner }}</p>
      <label>
        <input type="checkbox" [checked]="task().isCompleted" 
        (change)="handleChange()"
        />
        Completada
      </label>
      <button (click)="handleDelete()">Delete</button>
    </div>
  `,
  styles: `
    div {
      border: 1px solid black;
      margin: 5px;
      padding: 5px;
      min-width: 150px;
      border-radius: 5px;
    }
    label {
      display: block;
    }
  `,
})
export class TaskItem {
  task = input.required<Task>();
  eventDelete = output<Task>();
  eventUpdate = output<Task>();

  handleDelete() {
    this.eventDelete.emit(this.task());
  }

  handleChange() {
    this.task().isCompleted = !this.task().isCompleted;
    this.eventUpdate.emit(this.task());
  }

}
