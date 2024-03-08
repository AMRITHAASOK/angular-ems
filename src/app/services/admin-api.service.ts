import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  server_url='http://localhost:4000'

  constructor(private http:HttpClient) { }

  Authenticate(){
   return this.http.get(`${this.server_url}/users/1`)
  }

}
