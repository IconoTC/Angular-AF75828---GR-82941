import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "../counter/counter";
import { CounterSignal } from '../counter signals/counter';


@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Counter, CounterSignal],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <ind-counter />
    <ind-counter-signal />
    <router-outlet />
  `,
  styles: [],
})
export class App {
  // protected readonly title = 'Demo with Zone.js';
  protected readonly title = signal<string>('Demo without Zone.js');
}
