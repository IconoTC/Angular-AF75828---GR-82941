import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';
import { provideRouter, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuOption } from '../../types/menu-options';


const menuMock: MenuOption[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Contactos', path: '/contacts' },
  { label: 'Acerca de', path: '/about' },
];

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu, RouterLink, RouterLinkActive],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    component.menuOptions = signal(menuMock) as unknown as InputSignal<MenuOption[]>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items', () => {
    const rendered = fixture.nativeElement as HTMLElement;
    expect(rendered.querySelector('nav')?.textContent).toContain('Inicio');
    expect(rendered.querySelector('nav')?.textContent).toContain('Contactos');
    expect(rendered.querySelector('nav')?.textContent).toContain('Acerca de');
  });
});
