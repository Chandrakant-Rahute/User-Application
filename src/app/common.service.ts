import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/user "

  constructor(private _http:HttpClient) { }
  getUserOfList(){
    return this._http.get(this.URL);
  }
  addUser(data: any){
    return this._http.post(this.URL, data);
  }
  deleteUser(id:number){
    return this._http.delete(`${this.URL}/${id}`)
  }
  getCurrentData(id:number){
    return this._http.get(`${this.URL}/${id}`)
  }
  updateUser(id:number,data:string){
    return this._http.put(`${this.URL}/${id}`, data)
  }

}
 