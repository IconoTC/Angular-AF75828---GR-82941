import { Component, inject, input } from '@angular/core';
import { Note } from '../../models/notes';
import { State } from '../../services/state';

@Component({
  selector: 'ind-notes-item',
  imports: [],
  template: `
    <div [title]="'ID: ' + note().id">
      <h4>{{ note().title }}</h4>
      <p>{{ note().owner }}</p>
      <label>
        <input type="checkbox" [checked]="note().isCompleted" (change)="handleChange()" />
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
export class NotesItem {
  private state = inject(State);
  note = input.required<Note>();
  // eventDelete = output<Note>();
  // eventUpdate = output<Note>();

  handleDelete() {
    this.state.deleteNote(this.note().id);
    // this.eventDelete.emit(this.note());
  }

  handleChange() {
    this.note().isCompleted = !this.note().isCompleted;
    this.state.updateNote(this.note().id, this.note());
    // this.eventUpdate.emit(this.note());
  }
}
