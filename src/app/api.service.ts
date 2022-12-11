import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

UserLogin=(data:any)=>
{
  return this.http.post("http://localhost:8080/userLogin",data)
}

UserRegister=(data:any)=>
{
  return this.http.post("http://localhost:8080/userregister",data)
}

UserbyId=(data:any)=>
{
  return this.http.post("http://localhost:8080/userbyid",data)
}
}
