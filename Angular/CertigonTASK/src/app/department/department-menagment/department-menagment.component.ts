import { Component, OnInit } from '@angular/core';
import { employeeDTO } from 'src/app/employee/employee.model';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-department-menagment',
  templateUrl: './department-menagment.component.html',
  styleUrls: ['./department-menagment.component.css']
})
export class DepartmentMenagmentComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  employee!:employeeDTO[];
  columnsToDisplay = ['name','gender','age','salary','active','department'];
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData(){
    this.service.menagment().subscribe((x:any)=>{
      this.employee=x;
    });
  }
}
