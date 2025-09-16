import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-counter-signal',
  imports: [],
  template:  `
    <p>
      Counter Signal: {{ counter() }}
    </p>
    <button (click)="change(1)">+</button>
    <button (click)="change(-1)">-</button>
    `,
  styles: []
})
export class CounterSignal {
  protected counter = signal(0);

  protected change(value: number) {
    setTimeout(() => {
      this.counter.update(c => c + value);
      console.log('Counter:', this.counter());
    }, 1000);
  }
}

