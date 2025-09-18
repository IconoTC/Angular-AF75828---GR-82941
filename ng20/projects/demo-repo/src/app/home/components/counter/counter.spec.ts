import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';

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
    component.index = signal(1) as unknown as InputSignal<number>;
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
     spyOn(component.clickEvent, 'emit');
    
    const buttons: HTMLButtonElement[] = fixture.nativeElement.querySelectorAll('button');
    const incrementButton = buttons[0];
    const decrementButton = buttons[1];

    const span: HTMLSpanElement = fixture.nativeElement.querySelector('span');

    incrementButton.click();
    // incrementButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(span.textContent).toContain('1');
    expect(component.clickEvent.emit).toHaveBeenCalledWith(1);

    decrementButton.click();
    // decrementButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(span.textContent).toContain('0');
    expect(component.clickEvent.emit).toHaveBeenCalledWith(0);
  });


});
