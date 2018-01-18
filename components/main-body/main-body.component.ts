import { Component, OnInit,OnDestroy } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../models/review.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { FilterPipe } from '../../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';  
import { Subscription } from 'rxjs/Subscription';
import { FavouriteService } from '../../services/favourite.service';
import { Favourite } from '../../models/favourite.model';
import { Email2Service } from '../../services/email2.service';
import { Email2 } from '../../models/email2.model';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit,OnDestroy {
  reviews:Review[];
  subscription:Subscription;
  admin:any;
  adminauth:boolean;
  userauth:boolean;
  fav2cnt=0;
  favourite2:Favourite[];
  userID:any;
  emails:Email2[];

  constructor(private email2Service:Email2Service,
    private reviewService:ReviewService,private authService:AuthService,private dataStorageService:DataStorageService,private route:ActivatedRoute,private router:Router,private favouriteService:FavouriteService
  ) {router.events.subscribe((val) => {
    if (val instanceof NavigationEnd){
        window.scrollTo(0,0);
    }
}); }

  ngOnInit() {
    this.subscription=this.reviewService.reviewsChanged.subscribe(
      (reviews:Review[])=>{
        this.reviews=reviews;
      }
    );
    this.reviews=this.reviewService.getReviews();
    //this.dataStorageService.getBrands();
    if((localStorage.getItem('user')=='FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user')=='dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')){
      this.adminauth=true;
      //console.log(this.adminauth);
  }
  else{
      this.userauth=true;
  }
    this.admin=this.authService.adminauth;
    this.admin=this.adminauth;
    this.authService.adminChange(this.admin);
    //console.log(this.admin);
    
    //this.dataStorageService.getReviews();

    this.userID=localStorage.getItem('user');
    //console.log(this.userID);
    
    this.fav2cnt=0;
    
    
    
    this.favourite2=this.favouriteService.getFavourite();
    for(let i=0;i<this.favourite2.length;i++){
      if(this.favourite2[i].uid==this.userID){
        this.fav2cnt++;
        
      }      
    }
    
    this.favouriteService.favcount(this.fav2cnt);

    this.email2Service.emailChanged2.subscribe(
      (emails:Email2[])=>{
        this.emails=emails;
      }
    );
    this.emails=this.email2Service.getEmail();
  }
  onAdd(){
    this.router.navigate(['newRev']);
  }
 
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
