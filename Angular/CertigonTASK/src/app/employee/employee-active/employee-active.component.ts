import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeDTO } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-active',
  templateUrl: './employee-active.component.html',
  styleUrls: ['./employee-active.component.css']
})
export class EmployeeActiveComponent implements OnInit {

  constructor(private service:EmployeeService,private router:Router) { }
  employee!: employeeDTO[];
  columnsToDisplay = ['name','gender','age','salary','active','department'];
  
 

  ngOnInit(): void {
  this.LoadData(); 
  }

  LoadData(){
    this.service.active().subscribe((x:any)=>{
      this.employee=x;
    });
  }


 

}
