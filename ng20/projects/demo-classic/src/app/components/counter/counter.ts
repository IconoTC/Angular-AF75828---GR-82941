import { Component } from '@angular/core';

@Component({
  selector: 'ind-counter',
  imports: [],
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="change(1)">+</button>
    <button (click)="change(-1)">-</button>
  `,
  styles: [],
})
export class Counter {
  protected counter = 0;

  protected change(value: number) {
    setTimeout(() => {
      this.counter += value;
      console.log('Counter:', this.counter);
    }, 1000);
  }
}
