import { Component } from '@angular/core';
import { Greetings } from "./components/greetings/greetings";
import { CounterList } from "./components/counter-list/counter-list";

@Component({
  selector: 'ind-home',
  imports: [Greetings, CounterList],
  template: `
    <h2>Home Page</h2>
    <ind-counter-list />
    <ind-greetings />

  `,
  styles: ``
})
export default class Home {

 }
