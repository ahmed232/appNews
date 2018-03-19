import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class OneServiceService {

  constructor(
  private http: Http) { }
  gitNews(){
  	return this.http.get("https://jsonplaceholder.typicode.com/comments/").map(res => 
  		res.json());
  }

  postNews(postNewss){
  	return this.http.post("https://jsonplaceholder.typicode.com/comments/" , postNewss)
  	.map(res => res.json());
  }
  deleteItems(id){
  	return this.http.delete("https://jsonplaceholder.typicode.com/comments/" + id)
  	.map(res => res.json())
  }
  editItems(postNews){
  	return this.http.put("https://jsonplaceholder.typicode.com/comments/" + postNews.id , postNews)
  	.map(res => res.json())
  }

}
