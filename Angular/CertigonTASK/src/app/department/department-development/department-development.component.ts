import { Component, OnInit } from '@angular/core';
import { employeeDTO } from 'src/app/employee/employee.model';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-department-development',
  templateUrl: './department-development.component.html',
  styleUrls: ['./department-development.component.css']
})
export class DepartmentDevelopmentComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  employee!:employeeDTO[];
  columnsToDisplay = ['name','gender','age','salary','active','department'];
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData(){
    this.service.development().subscribe((x:any)=>{
      this.employee=x;
    });
  }
}
