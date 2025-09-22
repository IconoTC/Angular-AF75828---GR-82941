import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskForm } from './task-form';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';

// const moonElement = document.createElement('details');

const mockElement = {
  removeAttribute: (attr: string) => {
    console.log(`Mock: Removing attribute ${attr}`);
  }
} as HTMLDetailsElement;

describe('TaskForm', () => {
  let component: TaskForm;
  let fixture: ComponentFixture<TaskForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskForm],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskForm);
    component = fixture.componentInstance;
    component.parentElement = signal(mockElement) as unknown as InputSignal<HTMLDetailsElement>;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
