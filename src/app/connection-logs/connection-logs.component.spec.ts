import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionLogsComponent } from './connection-logs.component';

describe('ConnectionLogsComponent', () => {
  let component: ConnectionLogsComponent;
  let fixture: ComponentFixture<ConnectionLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
