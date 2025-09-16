import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-counter',
  imports: [],
  template: `
    <p>Counter: {{ counter() }}</p>
    <button (click)="change(1)">+</button>
    <button (click)="change(-1)">-</button>
  `,
  styles: [],
})
export class Counter {
  protected counter = signal(0);

  protected change(value: number) {
    this.counter.update((c) => c + value);
    console.log('Counter:', this.counter());
  }
}
