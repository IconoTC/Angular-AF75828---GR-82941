import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterList } from './counter-list';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterList', () => {
  let component: CounterList;
  let fixture: ComponentFixture<CounterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterList],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment clicks and update counts', () => {
   const paragraphs = fixture.nativeElement.querySelectorAll('p');
   expect(paragraphs[0].textContent).toContain('Number of clicks: 0');
   expect(paragraphs[1].textContent).toContain('Total count: 0');
  const counters: DebugElement[] = fixture.debugElement.queryAll(
      By.css('ind-counter')
    );

   counters[0].triggerEventHandler('clickEvent', 5);
   fixture.detectChanges();
   expect(paragraphs[0].textContent).toContain('Number of clicks: 1');
   expect(paragraphs[1].textContent).toContain('Total count: 5');
   
  //  .dispatchEvent(new CustomEvent('clickEvent', signal(5) ));
  //  fixture.detectChanges();
  //  expect(paragraphs[0].textContent).toContain('Number of clicks: 1');
  //  expect(paragraphs[1].textContent).toContain('Total count: 5');


    counters[1].triggerEventHandler('clickEvent', 3);
    fixture.detectChanges();
    expect(paragraphs[0].textContent).toContain('Number of clicks: 2');
    expect(paragraphs[1].textContent).toContain('Total count: 8');
  });
});
