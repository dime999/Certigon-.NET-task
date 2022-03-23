import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeCreationDTO } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  saveChanges(em: employeeCreationDTO){
    this.service.create(em).subscribe(() => {
    this.router.navigate(['/employee']);
    });
  }

}
