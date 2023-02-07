import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  
  data1:any;
  // private readonly baseUrl = '/assets/data.json';
  private readonly baseUrl = 'https://swapi.dev/api/';
  constructor( private http:HttpClient) { }


  // data(str:any){
  //   this.data1 = str
  // }

  getPeoples(){


    // this.http.post('',{
    //   past:'ashgm'
    // })

    return this.http.get(`${this.baseUrl}people`)

    // get
    // post
    // put
    // delete
    // patch
  }

  getSingleUser(userId:any){
    return this.http.get(`${this.baseUrl}people/${userId}`,{
      params:{
        abc:'asb'
      }
    })
  }


  getFilms(){
    return this.http.get(`${this.baseUrl}films`)
  }

}
