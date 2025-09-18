import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAdd } from './task-add';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';

// const moonElement = document.createElement('details');

const mockElement = {
  removeAttribute: (attr: string) => {
    console.log(`Mock: Removing attribute ${attr}`);
  }
} as HTMLDetailsElement;

describe('TaskAdd', () => {
  let component: TaskAdd;
  let fixture: ComponentFixture<TaskAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAdd],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAdd);
    component = fixture.componentInstance;
    component.parentElement = signal(mockElement) as unknown as InputSignal<HTMLDetailsElement>;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
