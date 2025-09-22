import { Component, ElementRef, inject, input, OnInit, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NoteDTO } from '../../models/notes';
import { JsonPipe } from '@angular/common';
import { State } from '../../services/state';

@Component({
  selector: 'ind-notes-add',
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
    }
  `,
})
export class NotesAdd implements OnInit {
  private state = inject(State);
  parentElement = input.required<HTMLDetailsElement>();
  // eventAdd = output<NoteDTO>();

  form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  ngForm = viewChild.required<NgForm>('ngForm');

  ngOnInit(): void {
    console.log('Form');
    console.dir(this.form().nativeElement);
    console.log('ngForm', this.ngForm());
  }

  addTask(data: Omit<NoteDTO, 'isCompleted'>) {

    this.state.addNote({ ...data, isCompleted: false });
    // this.eventAdd.emit({ ...data, isCompleted: false });
    console.log('Final note', { ...data, isCompleted: false });


    this.ngForm().resetForm();
    this.parentElement().open = false;
    //.removeAttribute('open');
  }
}
