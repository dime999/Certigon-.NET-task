import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employeeCreationDTO, employeeDTO } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor(private acitivatedRoute: ActivatedRoute,private service: EmployeeService,private router:Router) { }

  model!:employeeDTO;

  ngOnInit(): void {

    this.acitivatedRoute.params.subscribe(params=>{
      this.service.getById(params['id']).subscribe(x=>{
        this.model=x;
      })
    });
  }

  saveChanges(e:employeeCreationDTO)
  {
    this.service.edit(this.model.id,e).subscribe(()=>{
      this.router.navigate([""]);
    })
  }

}
