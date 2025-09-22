import { Component } from '@angular/core';
import { NotesList } from "./components/notes-list/notes-list";

@Component({
  selector: 'ind-notes-page',
  imports: [NotesList],
  template: `
    <h2>Notas (API)</h2>
     <ind-notes-list />
  `,
  styles: ``
})
export default class NotesPage {

}
