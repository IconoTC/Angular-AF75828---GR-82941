import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-header',
  imports: [],
  template: `
    <header>
      <h1>{{ title() }}</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: ``,
})
export class Header {
  protected readonly title = signal('Indra Angular 20 Course - RxJS');
}
