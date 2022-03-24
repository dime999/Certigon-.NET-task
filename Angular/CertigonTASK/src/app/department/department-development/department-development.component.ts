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
  active:boolean=true;
  columnsToDisplay = ['name','gender','age','salary','active','department'];
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData(){
    this.service.development(this.active).subscribe((x:any)=>{
      this.employee=x;
    });
  }

  Active(){
    this.active=true;
    this.LoadData();
  }
  Inactive(){
    this.active=false;
    this.LoadData();
  }
}
