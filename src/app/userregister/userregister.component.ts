import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  constructor(private api:ApiService, private route:Router){}
 name=""
 address=""
 phone=""
 email=""
 username=""
 password=""

 readvalues=()=>{
  let data={
    "name":this.name,
    "address":this.address,
    "phone":this.phone,
    "email":this.email,
    "username":this.username,
    "password":this.password
  }
  this.api.UserRegister(data).subscribe(
    (response:any)=>{
      if(response.status =="success")
      {
        console.log(response)
        alert("User Registration Successful")
        this.route.navigate(["/userlogin"])
      }else{
        alert("User Registration failed")
      }
    }
  )
 }

}
