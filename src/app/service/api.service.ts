import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inter } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url='https://gorest.co.in/public/v2/users/';
header={
  Authorization:'Bearer e4a0a586eaa867f6eddf01ceb1bf8da3f4b4953d0471c6cf9eed57b291dc4697'
}
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get(this.url,{headers:this.header})
  }


  post(data:any){

    let body = data;

this.http.post(this.url,body,{headers:this.header})
  }



  delete(id:number | undefined){
    if(id){

      this.http.delete('https://gorest.co.in/public/v2/users/'+id,{headers:this.header}).subscribe(b=>{
        
        console.log(id);
      })
    }
  }


  getid(id:number){
    console.log(id);
    return this.http.get<inter>('https://gorest.co.in/public/v2/users/'+id,{headers:this.header})
      }
}
