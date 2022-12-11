import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  
  constructor(private api:ApiService){}

  username=""
  password=""

  readvalues=()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }
    this.api.UserLogin(data).subscribe(
      (response:any)=>{
        if(response.status =="success"){
          localStorage.setItem("UserInfo",response.userId)
          
          alert("login success")
        }else{
          alert("login failed")
        }
      }
    )
  }

}
