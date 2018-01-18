import { Component,ViewEncapsulation, OnInit,OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-latest-device',
  templateUrl: './latest-device.component.html',
  styleUrls: ['./latest-device.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class LatestDeviceComponent implements OnInit {
  stk:boolean;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
      //console.log($event);
       //console.log($event.target.scrollingElement.scrollTop);
       let scroll=$event.target.scrollingElement.scrollTop;
       //console.log("scrolling");
       if(scroll>1980){
         this.stk=true;
         //console.log("asdasd",scroll);
         //console.log("stk",this.stk);
         
       }
      //  else if(scroll==2000){
      //   this.stk=true;
      //   console.log("asdasd",scroll);
      //   console.log("stk",this.stk);
        
      // }
       else if(scroll<1800){
         this.stk=false;
       }
       
  }

  news:News[];
  newss:News[];
  subscription:Subscription;

  constructor(
    private newsService:NewsService,private authService:AuthService,private dataStorageService:DataStorageService,private route:ActivatedRoute,private router:Router
  ) { }

  ngOnInit() {
    this.subscription=this.newsService.newsChanged.subscribe(
      (news:News[])=>{
        this.news=news;
      }
    );
    this.news=this.newsService.getNews();
    //this.dataStorageService.getNews();
    //this.dataStorageService.getReviews();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
