import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSummaryFormComponent } from './appointment-summary-form.component';

describe('AppointmentSummaryFormComponent', () => {
  let component: AppointmentSummaryFormComponent;
  let fixture: ComponentFixture<AppointmentSummaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSummaryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentSummaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
