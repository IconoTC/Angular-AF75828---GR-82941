import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesItem } from './notes-item';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';
import { Task } from '../../models/notes';

const taskMock: Task = { id: 1, title: 'Test Task', owner: 'Tester', isCompleted: false };

describe('NotesItem', () => {
  let component: NotesItem;
  let fixture: ComponentFixture<NotesItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesItem],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesItem);
    component = fixture.componentInstance;
    component.task = signal(taskMock) as unknown as InputSignal<Task>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
