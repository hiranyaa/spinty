import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCardsComponent } from './time-cards.component';

describe('TimeCardsComponent', () => {
  let component: TimeCardsComponent;
  let fixture: ComponentFixture<TimeCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeCardsComponent]
    });
    fixture = TestBed.createComponent(TimeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
