import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-footer',
  imports: [DatePipe],
  template: `
    <footer>
      <address>
        &copy; 2025 - IconoTraining
      </address>
      <p>
        {{date() | date:'fullDate'}}
      </p>
    </footer>
  `,
  styles: ``
})
export class Footer {
  protected date = signal(new Date());

}
