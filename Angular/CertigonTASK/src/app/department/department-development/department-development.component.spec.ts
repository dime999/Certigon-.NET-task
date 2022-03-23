import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDevelopmentComponent } from './department-development.component';

describe('DepartmentDevelopmentComponent', () => {
  let component: DepartmentDevelopmentComponent;
  let fixture: ComponentFixture<DepartmentDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
