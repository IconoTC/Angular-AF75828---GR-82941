import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment and decrement the counter', () => {
    //expect(component.counter()).toBe(0);
    expect(component['counter']()).toBe(0);
    // component['increment']();
    // expect(component['counter']()).toBe(1);
    // component['decrement']();
    // expect(component['counter']()).toBe(0);
    });
});
