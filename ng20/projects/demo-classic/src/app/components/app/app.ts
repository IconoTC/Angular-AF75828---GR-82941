import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "../counter/counter";

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Counter],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <ind-counter />
    <router-outlet />
  `,
  styles: [],
})
export class App {
  // protected readonly title = 'Demo with Zone.js';
  protected readonly title = signal<string>('Demo with Zone.js');
}
