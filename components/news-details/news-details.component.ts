import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../models/review.model';
import { Response } from '@angular/http';
import { DataStorageService } from '../../services/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news:News;
  id:number;
  adminauth:boolean;
  userauth:boolean;
  admin:boolean;
  constructor(private location: Location,private newsService:NewsService,private dataStorageService:DataStorageService,private authService:AuthService,private route:ActivatedRoute,private router:Router) { 
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
          window.scrollTo(0,0);
      }
  });
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.news=this.newsService.getNew(this.id);
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
    this.newsService.deleteNews(this.id);
    this.dataStorageService.storeNews().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
    this.router.navigate(['news']);
  }
  goBack(){
    this.location.back();
  }

}
