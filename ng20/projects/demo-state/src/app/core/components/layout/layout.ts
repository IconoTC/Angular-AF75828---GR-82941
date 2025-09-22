import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';
import { MENU_OPTIONS } from '../../../app.routes';
import { State } from '../../../notes/services/state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ind-layout',
  imports: [Header, Menu, Footer, AsyncPipe],
  template: `
    @let notes = notes$ | async;
    <ind-header>
      <p>Welcome to {{ title() }}!</p>
      <p>Tenemos {{ notes!.length }} notas</p>
      <ind-menu [menuOptions]="menuOptions()" />
    </ind-header>

    <main>
      <ng-content></ng-content>
    </main>

    <ind-footer />
  `,
  styles: ``,
})
export class Layout implements OnInit {
  protected readonly title = signal('Demo Routes');
  protected menuOptions = signal(MENU_OPTIONS);

  private state = inject(State);
  protected notes$ = this.state.getState().data;

  ngOnInit(): void {
    this.state.loadNotes();
  }
}
