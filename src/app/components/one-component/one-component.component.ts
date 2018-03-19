import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { OneServiceService } from '../../services/one-service.service';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {
allDetails : any [] = [];
postNews = {
	"id" : "",
	"email" : "",
	"body" : ""
};
editpst : boolean = false;
  constructor(public oneServiceService : OneServiceService) { 
  	this.oneServiceService.gitNews().subscribe(allDetails =>
  	 this.allDetails = allDetails);

}
addNews(editpst){
	if (editpst) { 
		this.oneServiceService.editItems(this.postNews).subscribe(postNews =>{
			for (let i = 0; i < this.allDetails.length; ++i) {
				if(this.allDetails[i].id == this.postNews.id){
					this.allDetails.splice(i,1);
				}
			}
			this.allDetails.push(postNews);
		});
	} else {
		this.oneServiceService.postNews(this.postNews).subscribe(postNews => {
			this.allDetails.push(postNews);
		})
	}

}
deleteItem(id){
	this.oneServiceService.deleteItems(id).subscribe(res =>{
		for (let i = 0; i < this.allDetails.length; ++i) {
			if(this.allDetails[i].id == id){
				this.allDetails.splice(i,1);
			}
		}
	});
}
editItem(postNews){
	this.editpst = true;
	this.postNews = postNews;
}
  ngOnInit() {
  }
}