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

  create(e: employeeCreationDTO){
   
    return this.http.post(this.apiURL,e)


  }
}
