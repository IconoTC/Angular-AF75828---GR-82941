import { Component, ElementRef, input, OnInit, output, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskDTO } from '../../models/task';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ind-task-form',
  imports: [FormsModule, JsonPipe],
  template: `"
    <form #form #ngForm="ngForm" (ngSubmit)="addTask(ngForm.value)">
      <label>
        <input type="text" placeholder="Title" name="title" required ngModel />
      </label>
      @if (ngForm.controls['title']?.invalid && ngForm.controls['title']?.touched) {
      <div style="color: red">Title is required</div>
      }
      <label>
        <input type="text" placeholder="Owner" name="owner" required ngModel />
      </label>
      @if (ngForm.controls['owner']?.invalid && ngForm.controls['owner']?.touched) {
      <div style="color: red">Owner is required</div>
      }
      <button type="submit" [disabled]="ngForm.invalid">Add Task</button>
    </form>
    <pre>
    {{ ngForm.value | json }}
  </pre
    > `,
  styles: `
  label {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }`,
})
export class TaskForm implements OnInit {
  parentElement = input.required<HTMLDetailsElement>();
  eventAdd = output<TaskDTO>();

  form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  ngForm = viewChild.required<NgForm>('ngForm');

  ngOnInit(): void {
    console.log('Form');
    console.dir(this.form().nativeElement);
    console.log('ngForm', this.ngForm());
  }

  addTask(data: Omit<TaskDTO, 'isCompleted'>) {
    this.eventAdd.emit({ ...data, isCompleted: false });
    console.log('Final task', { ...data, isCompleted: false });
    this.ngForm().resetForm();
    this.parentElement().removeAttribute('open');
  }
}
