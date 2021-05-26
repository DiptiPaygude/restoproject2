import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RestoService {
url="http://localhost:3000/restaurants";
//rootUrl="http://localhost:3000/user";


//id="number";

//id:any=[];

  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }

  saveRestro(data:any){
    console.warn(data);
    return this.http.post(this.url, data);
  }

  deleteResto(id: any){
    return this.http.delete(`${this.url}/${id}`);

  }
  getCurrentResto(id: any){
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id: any , data:any){
    return this.http.put(`${this.url}/${id}`, data);
  }
  registerResto(data:any){
    console.warn(data);
    return this.http.post(`${baseUrl}`, data);
  }

  loginResto(data:any)  {
    console.warn(data);
    return this.http.get(`${baseUrl}`,data);
  }
}
