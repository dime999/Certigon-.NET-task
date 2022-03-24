import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employeeCreationDTO, employeeDTO } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  private apiURL = environment.apiURL + '/Employee';

  getById(id: number): Observable<employeeDTO> {
    return this.http.get<employeeDTO>(`${this.apiURL}/${id}`);
  }

  get(): Observable<any>{
    return this.http.get<employeeDTO[]>(this.apiURL);
  }

  delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  create(e:employeeCreationDTO){
   
    return this.http.post(this.apiURL,e)


  }

  edit(id:number,e:employeeCreationDTO){
    return this.http.put((`${this.apiURL}/${id}`),e);

  }

  active(): Observable<any>{
    return this.http.get<employeeDTO[]>(this.apiURL+`/true?active=true`);
  }
  inactive(): Observable<any>{
    return this.http.get<employeeDTO[]>(this.apiURL+`/false?active=false`);
  }

  hr(active:boolean): Observable<any>{
    return this.http.get<employeeDTO[]>(`https://localhost:44374/department/3/employees?id=3&active=${active}`);

  }
  development(active:boolean): Observable<any>{
    return this.http.get<employeeDTO[]>(`https://localhost:44374/department/1/employees?id=1&active=${active}`);

  }
  menagment(active:boolean): Observable<any>{
    return this.http.get<employeeDTO[]>(`https://localhost:44374/department/2/employees?id=2&active=${active}`);

  }

 
}
