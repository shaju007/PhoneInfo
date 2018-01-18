import { Injectable } from '@angular/core';
import { Favourite } from '../models/favourite.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class FavouriteService {
  fav3cnt=0;
  fav3cntChange=new Subject();
  favouriteChanged=new Subject<Favourite[]>();
  private favourite:Favourite[] =[
    new Favourite(4,'shaju','s7'),
    
    new Favourite(0,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','samsung galaxy s6'),
    new Favourite(0,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','samsung galaxy c7'),

  ];
  
setFavourite(favourite:Favourite[]){
    this.favourite=favourite;
    this.favouriteChanged.next(this.favourite.slice());
}  
getFavourite(){
    return this.favourite.slice();
  }

addFavourite(favourite:Favourite){
  this.favourite.push(favourite);
  console.log(this.favourite);
  
  this.favouriteChanged.next(this.favourite.slice());
}

deleteFavourite(index:number){
  this.favourite.splice(index,1);
  this.favouriteChanged.next(this.favourite.slice());
  console.log(this.favourite);
  
}
favcount(fav3cnt){
  this.fav3cnt=fav3cnt;
  this.fav3cntChange.next(this.fav3cnt);
  
}

  constructor() { }

}
