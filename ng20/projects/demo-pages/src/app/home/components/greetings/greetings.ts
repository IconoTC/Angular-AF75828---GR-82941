import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-greetings',
  imports: [FormsModule],
  template: `
    <div>
      <h3>Greetings</h3>
      <!-- <input placeholder="Your name" [value]="name()" (input)="name.set($event.target.value)" /> -->
       <input placeholder="Your name" [(ngModel)]="name" />
      <p>
        Hola {{ name() ? name() : 'amigo' }}!
      </p>
      <button (click)="clear($event)">Borrar</button>
    </div>

  `,
  styles: `
    :host {
      margin: 1rem;
      display: block;
      padding: 0.5rem;
      border: 1px solid lightgray;
      border-radius: 10px;
    }
    p { color: darkblue; }
  `,
})
export class Greetings {
  protected name = signal('');

  protected clear(event: Event) {
    this.name.set('');
    console.log(event)
  }
}
