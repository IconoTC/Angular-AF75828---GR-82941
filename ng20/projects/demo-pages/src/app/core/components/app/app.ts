import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Layout } from '../layout/layout';

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Layout],
  template: `
    <ind-layout>
      <router-outlet />
    </ind-layout>
  `,
  styles: [],
})
export class App {
  // protected readonly title = signal('Demo Routes');
}
