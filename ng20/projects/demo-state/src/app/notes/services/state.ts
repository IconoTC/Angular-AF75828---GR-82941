import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ID, Note, NoteDTO } from '../models/notes';
import { NotesErrors, NotesState } from '../../core/types/notes-state';
import { ApiRepo } from './api-repo';

@Injectable({
  providedIn: 'root'
})
export class State {

  private notes = new BehaviorSubject<Note[]>([]);
  private error = new BehaviorSubject<NotesErrors>({});
  private repo = inject(ApiRepo);

  getState(): NotesState  {
    return {
      data: this.notes.asObservable(),
      errors: this.error.asObservable()
    };
  }

  loadNotes() {
    this.repo.getAll().subscribe({
      next: (notes) => {
        this.notes.next(notes);
        this.error.next({});
      },
      error: (err) => {
        this.error.next({ load: 'Error fetching notes: ' + err.status + ' ' + err.statusText });
      }
    });
  }

  deleteNote(id: ID) {
     this.repo.delete(id).subscribe({
       next: () => {
         this.notes.next(this.notes.getValue().filter((n) => n.id !== id));
       },
       error: (err) => {
         this.error.next({ delete: 'Error deleting notes: ' + err.status + ' ' + err.statusText });
       },
     });
  }

  addNote(note: NoteDTO) {
    this.repo.add(note).subscribe({
      next: (newNote) => {
        this.notes.next([...this.notes.getValue(), newNote]);
        this.error.next({});
      },
      error: (err) => {
        this.error.next({ add: 'Error adding notes: ' + err.status + ' ' + err.statusText });
      }
    });

  }

  updateNote(id: ID, note: NoteDTO) {
    this.repo.update(id, note).subscribe({
      next: () => {
        this.notes.next((this.notes.getValue()
        .map((n) => (n.id === id ? { ...n, ...note } : n))));
        this.error.next({});
      },
      error: (err) => {
        this.error.next({ update: 'Error updating notes: ' + err.status + ' ' + err.statusText });
      }
    });
  }
}
