import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'ind-counter',
  imports: [],
  template: `
    <p>
      Counter {{ index() }} value:
      <span [class]="{ negative: counter() < 0 }">
        {{ counter() }}
      </span>
    </p>
    <button (click)="change(1)" [disabled]="counter() >= 5">➕</button>
    <button (click)="change(-1)" [disabled]="counter() <= -5">➖</button>

    @if (counter() === 5) {
      <p>Max reached</p>
    } @else if (counter() === -5) {
      <p>Min reached</p>
    }
  `,
  styles: [
    '.negative { color: red; }',
    `
      :host {
        margin: 1rem;
        display: block;
        padding: 0.5rem;
        border: 1px solid lightgray;
        border-radius: 10px;
      }
    `,
  ],
})
export class Counter {
  //  @Input({
  //     required: true,
  //  }) index!: number
  index = input.required<number>();

  // @Output() clickEvent = new EventEmitter<number>();
  clickEvent = output<number>();

  protected counter = signal(0);

  protected change(value: number) {
    this.counter.update((c) => c + value);
    console.log('Counter:', this.counter());
    this.clickEvent.emit(this.counter());
  }
}
