import { Component } from '@angular/core';
import { Register } from "./components/register/register";

@Component({
  selector: 'ind-user-page',
  imports: [Register],
  template: `
    <h2>UserPage</h2>
    <ind-register />
  `,
  styles: ``
})
export default class UserPage {

}
