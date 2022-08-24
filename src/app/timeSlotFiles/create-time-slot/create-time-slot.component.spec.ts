import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimeSlotComponent } from './create-time-slot.component';

describe('CreateTimeSlotComponent', () => {
  let component: CreateTimeSlotComponent;
  let fixture: ComponentFixture<CreateTimeSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTimeSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
