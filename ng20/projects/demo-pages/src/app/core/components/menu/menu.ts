import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_OPTIONS } from '../../../app.routes';
import { MenuOption } from '../../types/menu-options';

@Component({
  selector: 'ind-menu',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <ul>
        @for (item of menuOptions(); track $index) {
          <li>
            <a [routerLink]="item.path" routerLinkActive="active">{{ item.label }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
      nav {
        background: #eee;
        padding: 1rem;
      }
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        padding: 0;
        margin: 0;
      }

      a {
        margin: 0 1rem;
        text-decoration: none;
        color: inherit;
      }

      .active {
        font-weight: bold;
        text-decoration: underline;
      }
    `,
})
export class Menu {
  menuOptions = signal<MenuOption[]>(MENU_OPTIONS);
}

