import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  base_url="http://localhost:3000/"

  constructor(private http:HttpClient) { }
  getProduct(): Observable<any>{
    return this.http.get<any>(this.base_url+"mobiles")
  }
  UserValidator():Observable<any>{
    return this.http.get<any>(this.base_url+"users")

  }
  getProductId(id):Observable<any>{
    return this.http.get<any>(this.base_url+"mobiles/"+id)
  }
  deleteProd(id):Observable<void>{
    return this.http.delete<void>(`${this.base_url}mobiles/${id}`)
  }
  addProd(data):Observable<any>{
    const options= new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(this.base_url+"mobiles",data,{headers:options})
  }
  editprod(data):Observable<void>{
    const options= new HttpHeaders({'Content-Type':'application/json'})
    return this.http.put<void>(`${this.base_url}mobiles/${data.id}`,data,{headers:options})
  }
}
