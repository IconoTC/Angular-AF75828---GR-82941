/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { NotesAdd } from '../notes-add/notes-add';
import { NotesItem } from '../notes-item/notes-item';
import { Note, NoteDTO } from '../../models/notes';

import { AsyncPipe, JsonPipe } from '@angular/common';
import { State } from '../../services/state';
import { Observable } from 'rxjs';
import { NotesErrors } from '../../../core/types/notes-state';

@Component({
  selector: 'ind-notes-list',
  imports: [NotesAdd, NotesItem, JsonPipe, NotesAdd, AsyncPipe],
  template: `
    <details #addNoteDetails>
      <summary>Add Note Form</summary>
      <ind-notes-add [parentElement]="element().nativeElement" />
    </details>

    <h3>Lista de tareas</h3>

    @let error = error$ | async;
    @if (error && error.load) {
      <div class="error">Error: {{ error.load }}</div>
    } @else {
      @let notes = notes$ | async;
      <div class="notes-list">
        @for (notes of notes; track notes.id) {
          <ind-notes-item
            [note]="notes"
          />
        }
      </div>

      <div>
        <hr />
        notes:
        <pre>
      {{ notes | json }}
      </pre
        >
      </div>
    }
  `,
  styles: `
    .notes-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  `,
})
export class NotesList implements OnInit {
  private state = inject(State);

  notes$: Observable<Note[]> = this.state.getState().data;
  error$: Observable<NotesErrors>  = this.state.getState().errors;

  element = viewChild.required<ElementRef<HTMLDetailsElement>>('addNoteDetails');


  ngOnInit(): void {
    this.state.loadNotes();
  }

  // handleDelete(note: Note) {
  //   this.state.deleteNote(note.id);
  // }

  // handleUpdate(updatedNote: Note) {
  //   this.state.updateNote(updatedNote.id, updatedNote);
  // }

  // handleAdd(notesData: NoteDTO) {
  //   // this.state.addNote(notesData);
  //   // Lógica ligada a la vista
  //   this.element().nativeElement.open = false;
  // }
}
