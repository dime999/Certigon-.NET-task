import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeActiveComponent } from './employee-active.component';

describe('EmployeeActiveComponent', () => {
  let component: EmployeeActiveComponent;
  let fixture: ComponentFixture<EmployeeActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
