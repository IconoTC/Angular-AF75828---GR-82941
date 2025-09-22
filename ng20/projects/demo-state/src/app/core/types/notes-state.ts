import { Observable } from "rxjs";
import { Note } from "../../notes/models/notes";

export interface NotesErrors {
  load?: string;
  add?: string;
  update?: string;
  delete?: string;
}

export interface NotesState {
  data: Observable<Note[]>;
  errors: Observable<NotesErrors>;
};
