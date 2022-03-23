import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDevelopmentComponent } from './department/department-development/department-development.component';
import { DepartmentHrComponent } from './department/department-hr/department-hr.component';
import { DepartmentMenagmentComponent } from './department/department-menagment/department-menagment.component';
import { EmployeeActiveComponent } from './employee/employee-active/employee-active.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeInactiveComponent } from './employee/employee-inactive/employee-inactive.component';
import { EmployeeIndexComponent } from './employee/employee-index/employee-index.component';

const routes: Routes = [

  {path: 'employee', component: EmployeeIndexComponent},
  {path: 'employee/add', component: EmployeeAddComponent},
  {path: 'employee/edit/:id', component: EmployeeEditComponent},
  {path: 'employee/active', component: EmployeeActiveComponent},
  {path: 'employee/inactive', component: EmployeeInactiveComponent},



  {path: 'department/hr', component: DepartmentHrComponent},
  {path: 'department/development', component: DepartmentDevelopmentComponent},
  {path: 'department/menagment', component: DepartmentMenagmentComponent},
  
 

  {path: '**', component: EmployeeIndexComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
