import { Component } from '@angular/core';
import { TaskList } from "./components/task-list/task-list";

@Component({
  selector: 'ind-task',
  imports: [TaskList],
  template: `
    <h2>Tasks</h2>
    <ind-task-list />
  `,
  styles: ``
})
export default class Tasks {

}
