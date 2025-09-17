import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItem } from './task-item';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';
import { Task } from '../../models/task';

const taskMock: Task = { id: 1, title: 'Test Task', owner: 'Tester', isCompleted: false };

describe('TaskItem', () => {
  let component: TaskItem;
  let fixture: ComponentFixture<TaskItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItem],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskItem);
    component = fixture.componentInstance;
    component.task = signal(taskMock) as unknown as InputSignal<Task>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
