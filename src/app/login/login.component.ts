import { Component } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   email: string=""//form data
   password: string=""

   constructor(private api:AdminApiService,private router:Router){}

   login(){
    if(this.email==""||this.password==""){
      alert("Please fill the form")
    }
    else{
      console.log(this.email,this.password);
     this.api.Authenticate().subscribe({
      next:(res:any)=>{
        const {email,password} = res//data from the server
        if(email===this.email && password===this.password){
          alert("login success")
          this.router.navigateByUrl('dashboard')
        }
        else{
          alert("Invalid Data")
        }
      },
      error:(res:any)=>{
        console.log(res);//errors from the server
        
      }
     })
    }
   }
}
