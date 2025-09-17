import { Component, computed, signal } from '@angular/core';
import { Counter } from "../counter/counter";

@Component({
  selector: 'ind-counter-list',
  imports: [Counter],
  template: `
    <h3>Counter List</h3>
    <p>Number of clicks: {{ clicks() }}</p>
    <p>Total count: {{ totalCount() }}</p>
    <ind-counter [index]="1" (clickEvent)="clicksHandler($event, 0)"/>
    <ind-counter [index]="2" (clickEvent)="clicksHandler($event, 1)"/>
  `,
  styles: ``
})
export class CounterList {
  protected clicks = signal(0);
  protected counts = signal<number[]>([0,0]);

  protected totalCount = computed(() => {
    return this.counts().reduce((a, b) => a + b, 0);
  });


  protected clicksHandler(value: number, index: number) {
    this.clicks.update(c => c + 1);
    this.counts.update(c => {
      const newCounts = [...c];
      newCounts[index] = value;
      return newCounts;
    });

  }
}

// Mutabilidad

const data = { a: 1, b: 2 };
data.a = 3; // mutación

const data2 = { a: 1, b: 2 };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newData2 = { ...data2, a: 3 }; // inmutabilidad
