import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetimeSlotComponent } from './updatetime-slot.component';

describe('UpdatetimeSlotComponent', () => {
  let component: UpdatetimeSlotComponent;
  let fixture: ComponentFixture<UpdatetimeSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetimeSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
