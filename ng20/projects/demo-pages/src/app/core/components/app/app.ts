import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "../menu/menu";

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Menu],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <ind-menu />

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Demo Routes');
}
