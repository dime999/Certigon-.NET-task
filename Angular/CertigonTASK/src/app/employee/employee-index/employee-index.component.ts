import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeDTO } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css']
})
export class EmployeeIndexComponent implements OnInit {

  constructor(private service:EmployeeService,private router:Router) { }
  employee!: employeeDTO[];
  columnsToDisplay = ['name','gender','age','salary','active','department','actions'];
  chossenEmployee:any=null;
 

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.get().subscribe((x:any)=>{
      this.employee=x;
    });
   
  }


  btnNew() {
    this.chossenEmployee = {
      show:true,
      id:0,
      name :"",
      gender:"",
      age: 20,
      salary:  1000,
      departmentId: 1,
    }
  }

 


  
  delete(id: number){
    this.service.delete(id).subscribe(() => {
    this.loadData();
    });
    this.router.navigate(['']);

  }


}
