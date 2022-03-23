import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeDTO } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-inactive',
  templateUrl: './employee-inactive.component.html',
  styleUrls: ['./employee-inactive.component.css']
})
export class EmployeeInactiveComponent implements OnInit {

  constructor(private service:EmployeeService,private router:Router) { }
  employee!: employeeDTO[];
  columnsToDisplay = ['name','gender','age','salary','active','department'];
  
 

  ngOnInit(): void {
  this.LoadData(); 
  }

  LoadData(){
    this.service.inactive().subscribe((x:any)=>{
      this.employee=x;
    });
  }


}
