import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de implementación (caja blanca)
  it('should increment and decrement the counter', () => {
    expect(component['counter']()).toBe(0);
    component['change'](1);
    expect(component['counter']()).toBe(1);
    component['change'](-1);
    expect(component['counter']()).toBe(0);
  });

  // Test de interfaz (caja negra)

  it(`should change when user click the buttons`, () => {
    const buttons: HTMLButtonElement[] = fixture.nativeElement.querySelectorAll('button');
    const incrementButton = buttons[0];
    const decrementButton = buttons[1];

    const span: HTMLSpanElement = fixture.nativeElement.querySelector('span');

    incrementButton.click();
    // incrementButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(span.textContent).toContain('1');

    decrementButton.click();
    // decrementButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(span.textContent).toContain('0');
  });

  it('should disable increment button when counter is 5 and decrement button when counter is -5', () => {
    const incrementButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('button:nth-of-type(1)');
    const decrementButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('button:nth-of-type(2)');

    component['counter'].set(5);
    fixture.detectChanges();
    expect(incrementButton.disabled).toBe(true);
    expect(decrementButton.disabled).toBe(false);

    component['counter'].set(-5);
    fixture.detectChanges();
    expect(incrementButton.disabled).toBe(false);
    expect(decrementButton.disabled).toBe(true);
  });
});
