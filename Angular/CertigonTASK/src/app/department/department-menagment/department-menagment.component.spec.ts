import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentMenagmentComponent } from './department-menagment.component';

describe('DepartmentMenagmentComponent', () => {
  let component: DepartmentMenagmentComponent;
  let fixture: ComponentFixture<DepartmentMenagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentMenagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMenagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
