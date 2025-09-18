import { Component, signal } from '@angular/core';
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Footer } from "../footer/footer";
import { MENU_OPTIONS } from '../../../app.routes';

@Component({
  selector: 'ind-layout',
  imports: [Header, Menu, Footer],
  template: `
    <ind-header>
      <p>Welcome to {{ title() }}!</p>
      <ind-menu [menuOptions]="menuOptions()"/>
    </ind-header>

    <main>
      <ng-content></ng-content>
    </main>

    <ind-footer />
  `,
  styles: ``
})
export class Layout {

  protected readonly title = signal('Demo Routes');
  protected menuOptions = signal(MENU_OPTIONS);
}
