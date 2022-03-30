import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department/department.service';
import { environment } from 'src/environments/environment';
import { employeeCreationDTO } from '../employee.model';
import { EmployeeService } from '../employee.service';
declare function porukaError(a: string): any;

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  @Input()
  editEmployee:any;

  departments:any;

  constructor(private service:EmployeeService,private router:Router,private depService:DepartmentService,private httpKlijent:HttpClient) {
    this.depService.getAll().subscribe((x:any)=>{
      this.departments=x;
    });

   }

  ngOnInit(): void {
  }

  saveChanges(em: employeeCreationDTO){
    this.service.create(em).subscribe(() => {
     
    this.router.navigate(['/employee']);
    },
    (err) => console.log(err.error));
  }

}
