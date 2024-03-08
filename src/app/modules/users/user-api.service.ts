import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './models/users.models';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  server_url='http://localhost:4000'
  constructor(private http:HttpClient) { }

  //Add a user API - post  - data send to the server (user)
  addUserApi(user:UserModel){
      return this.http.post(`${this.server_url}/users`,user)
  }

  //Get all users API - get 
  getAllUsers(){
    return this.http.get(`${this.server_url}/users`)
  }
}
