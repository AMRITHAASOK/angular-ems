import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../models/users.models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit  {

  allUsers:UserModel[]=[]//to hold user details from the api fetch request

  constructor(private api:UserApiService){}

  ngOnInit(): void {
  this.getAllUsers()
  }

  //Get a list of users from the server 
  getAllUsers(){
this.api.getAllUsers().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.allUsers=res
    
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
  }

}
