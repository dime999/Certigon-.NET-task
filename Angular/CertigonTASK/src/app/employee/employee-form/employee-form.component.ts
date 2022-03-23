import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/department/department.service';
import { employeeCreationDTO } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  departments:any;
  form!: FormGroup;

  constructor(private service:DepartmentService,private formBuilder: FormBuilder) { }


  
  @Output()
  onSaveChanges: EventEmitter<employeeCreationDTO>=new EventEmitter<employeeCreationDTO>();

  ngOnInit(): void {

    this.form=this.formBuilder.group({
      name: ['',{
        validators:[Validators.required, Validators.minLength(3)]
      }],
      gender:'',
      age:20,
      salary:1000,
      active:false,
      depardmentId:1,


    });

    this.service.getAll().subscribe((x:any)=>{
      this.departments=x;
    });
  }

  saveChanges()
  {
    
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName()
  {
    const field=this.form.get('name');
    
    if(field?.hasError('required')){
      return 'The name field is required';
    }
    if(field?.hasError('minlenght'))
    {
      return 'The minimum lenght is 3';
    }
    return '';
  }

}
