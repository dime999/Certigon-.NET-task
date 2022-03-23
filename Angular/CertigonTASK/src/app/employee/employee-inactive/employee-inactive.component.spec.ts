import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInactiveComponent } from './employee-inactive.component';

describe('EmployeeInactiveComponent', () => {
  let component: EmployeeInactiveComponent;
  let fixture: ComponentFixture<EmployeeInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
