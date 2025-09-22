import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAdd } from './task-add';
import { provideZonelessChangeDetection } from '@angular/core';

// const moonElement = document.createElement('details');

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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
