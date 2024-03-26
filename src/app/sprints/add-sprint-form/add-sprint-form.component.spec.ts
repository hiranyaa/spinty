import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSprintFormComponent } from './add-sprint-form.component';

describe('AddSprintFormComponent', () => {
  let component: AddSprintFormComponent;
  let fixture: ComponentFixture<AddSprintFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSprintFormComponent]
    });
    fixture = TestBed.createComponent(AddSprintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
