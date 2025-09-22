import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAdd } from './notes-add';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';

// const moonElement = document.createElement('details');

const mockElement = {
  removeAttribute: (attr: string) => {
    console.log(`Mock: Removing attribute ${attr}`);
  }
} as HTMLDetailsElement;

describe('NotesAdd', () => {
  let component: NotesAdd;
  let fixture: ComponentFixture<NotesAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesAdd],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesAdd);
    component = fixture.componentInstance;
    component.parentElement = signal(mockElement) as unknown as InputSignal<HTMLDetailsElement>;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
