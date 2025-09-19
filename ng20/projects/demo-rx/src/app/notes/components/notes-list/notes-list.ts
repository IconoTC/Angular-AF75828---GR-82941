/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { NotesAdd } from '../notes-add/notes-add';
import { NotesItem } from '../notes-item/notes-item';
import { Note, NoteDTO } from '../../models/notes';

import { JsonPipe } from '@angular/common';
import { ApiRepo } from '../../servicios/api-repo';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ind-notes-list',
  imports: [NotesAdd, NotesItem, JsonPipe, NotesAdd],
  template: `
    <details #addNoteDetails2>
      <summary>Add Note Form</summary>
      <ind-notes-add [parentElement]="element2().nativeElement" (eventAdd)="handleAdd($event)" />
    </details>

    <h3>Lista de tareas</h3>

    @if (error()) {
      <div class="error">Error: {{ error() }}</div>
    } @else if (notes().length === 0) {
      <div class="notes-list">
        @for (notes of notes(); track notes.id) {
          <ind-notes-item
            [note]="notes"
            (eventDelete)="handleDelete($event)"
            (eventUpdate)="handleUpdate($event)"
          />
        }
      </div>

      <div>
        <hr />
        notes:
        <pre>
      {{ notes() | json }}
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
  notes = signal<Note[]>([]);
  error = signal<string | null>(null);

  element = viewChild.required<ElementRef<HTMLDetailsElement>>('addNoteDetails');
  element2 = viewChild.required<ElementRef<HTMLDetailsElement>>('addNoteDetails2');
  private repo = inject(ApiRepo);

  ngOnInit(): void {
    this.repo.getAll().subscribe({
      next: (t) => {
        this.notes.set(t);
        console.log(this.notes());
      },
      error: (err: HttpErrorResponse) => {
        this.error.set('Error fetching notes: ' + err.status + ' ' + err.statusText);
      },
    });
  }

  handleDelete(note: Note) {
    this.repo.delete(note.id).subscribe({
      next: () => {
        this.notes.update((notes) => notes.filter((n) => n.id !== note.id));
      },
      error: (err: HttpErrorResponse) => {
        this.error.set('Error deleting notes: ' + err.status + ' ' + err.statusText);
      },
    });
  }

  handleUpdate(updatedNote: Note) {
    this.repo.update(updatedNote.id, updatedNote).subscribe({
      next: () => {
        this.notes.update((notes) => notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)));
      },
      error: (err: HttpErrorResponse) => {
        this.error.set('Error deleting notes: ' + err.status + ' ' + err.statusText);
      },
    });
  }

  handleAdd(notesData: NoteDTO) {
    this.repo.add(notesData).subscribe({
      next: (note) => {
        this.notes.update((notes) => [...notes, note]);
        this.element().nativeElement.open = false;
        this.element2().nativeElement.open = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error.set('Error adding notes: ' + err.status + ' ' + err.statusText);
      },
    });
  }
}
