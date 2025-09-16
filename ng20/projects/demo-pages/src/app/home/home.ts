import { Component } from '@angular/core';
import { Counter } from "./components/counter/counter";
import { Greetings } from "./components/greetings/greetings";

@Component({
  selector: 'ind-home',
  imports: [Counter, Greetings],
  template: `
    <h2>Home Page</h2>
    <ind-counter />
    <ind-greetings />

  `,
  styles: ``
})
export default class Home {

 }
