import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greetings } from './greetings';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Greetings', () => {
  let component: Greetings;
  let fixture: ComponentFixture<Greetings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greetings],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Greetings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should type a user name and see in the document', () => {
    const debugElement = fixture.debugElement;
    const inputElement: HTMLInputElement = debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'Test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const pElement: HTMLParagraphElement = debugElement.query(By.css('p')).nativeElement;
    expect(pElement.textContent).toContain('Hola Test');

    const buttonDebugElement = debugElement.query(By.css('button'));
    buttonDebugElement.triggerEventHandler('click');
    fixture.detectChanges();
    expect(pElement.textContent).toContain('Hola amigo');
  });
});
