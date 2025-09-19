import { ComponentFixture, TestBed } from '@angular/core/testing';

import UserPage from './user-page';
import { provideZonelessChangeDetection } from '@angular/core';

describe('UserPage', () => {
  let component: UserPage;
  let fixture: ComponentFixture<UserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPage],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
