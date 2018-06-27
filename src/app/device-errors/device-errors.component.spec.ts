import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceErrorsComponent } from './device-errors.component';

describe('DeviceErrorsComponent', () => {
  let component: DeviceErrorsComponent;
  let fixture: ComponentFixture<DeviceErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
