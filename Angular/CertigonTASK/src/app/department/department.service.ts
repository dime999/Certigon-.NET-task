import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { departmentDTO } from './model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL+'/Department';


  getAll(): Observable<departmentDTO[]>
  {
    return this.http.get<departmentDTO[]>(this.apiURL);
  }

 getById(id:number):Observable<departmentDTO>
 {
   return this.http.get<departmentDTO>(`${this.apiURL}/${id}`);
 }
}
