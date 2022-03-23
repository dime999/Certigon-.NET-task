import { Component, OnInit } from '@angular/core';
import { employeeDTO } from 'src/app/employee/employee.model';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-department-hr',
  templateUrl: './department-hr.component.html',
  styleUrls: ['./department-hr.component.css']
})
export class DepartmentHrComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  employee!:employeeDTO[];
  columnsToDisplay = ['name','gender','age','salary','active','department'];
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData(){
    this.service.hr().subscribe((x:any)=>{
      this.employee=x;
    });
  }

}
