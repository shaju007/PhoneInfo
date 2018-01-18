import { Injectable } from '@angular/core';
import { Rating } from '../models/rating.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RatingService {
  ratingChanged=new Subject<Rating[]>();
  private rating:Rating[] =[
    new Rating(true,true,'shaju','s7'),

  ];
  constructor() { }
  setRating(rating:Rating[]){
    this.rating=rating;
    this.ratingChanged.next(this.rating.slice());
}  
getRating(){
    return this.rating.slice();
  }

addRating(rating:Rating){
  this.rating.push(rating);
  console.log(this.rating);
  
  this.ratingChanged.next(this.rating.slice());
}
updateRating(index:number,like:any,dislike:any){
  this.rating[index].like=like;
  this.rating[index].dislike=dislike;
  this.ratingChanged.next(this.rating.slice());
}
removedup(index:number){
  this.rating.splice(index,1)
}
}
