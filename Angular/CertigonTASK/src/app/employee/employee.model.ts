

export interface employeeDTO{
    id: number;
    name: string;
    gender: string;
    age: number;
    salary: number;
    active: boolean;
    departmentId: number;  
    

}

export interface employeeCreationDTO{
    
  name:string;
  gender:string;
  age:number;
  salary:number;
  active:boolean;
  departmentId:number;  

}