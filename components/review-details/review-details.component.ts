import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../models/review.model';
import { Response } from '@angular/http';
import { DataStorageService } from '../../services/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
  review:Review;
  id:number;
  adminauth:boolean;
  userauth:boolean;
  admin:boolean;
  

  constructor(private location: Location,private reviewService:ReviewService,private dataStorageService:DataStorageService,private authService:AuthService,private route:ActivatedRoute,private router:Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
          window.scrollTo(-300,-300);
      }
  });
   }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.review=this.reviewService.getReview(this.id);
      }
    );
    if((localStorage.getItem('user')=='FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user')=='dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')){
      this.adminauth=true;
      console.log(this.adminauth);
  }
  else{
      this.userauth=true;
  }
    this.admin=this.authService.adminauth;
    this.admin=this.adminauth;
  }
  onEditItem(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteItem(){
    this.reviewService.deleteReview(this.id);
    this.dataStorageService.storeReviews().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
    this.router.navigate(['/']);
  }
  goBack(){
    this.location.back();
  }
 
  

}
