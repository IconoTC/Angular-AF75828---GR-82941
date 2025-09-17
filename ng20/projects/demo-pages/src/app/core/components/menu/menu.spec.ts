import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, RouterLink, RouterLinkActive } from '@angular/router';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items', () => {
    const rendered = fixture.nativeElement as HTMLElement;
    expect(rendered.querySelector('nav')?.textContent).toContain('Inicio');
    expect(rendered.querySelector('nav')?.textContent).toContain('Tareas');
    expect(rendered.querySelector('nav')?.textContent).toContain('Acerca de');
  });
});
