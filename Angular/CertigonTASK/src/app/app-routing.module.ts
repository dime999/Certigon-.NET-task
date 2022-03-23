import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeIndexComponent } from './employee/employee-index/employee-index.component';

const routes: Routes = [

  {path: 'employee', component: EmployeeIndexComponent},
  {path: 'employee/add', component: EmployeeAddComponent},
  {path: 'employee/edit/:id', component: EmployeeEditComponent},
 

  {path: '**', component: EmployeeIndexComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
