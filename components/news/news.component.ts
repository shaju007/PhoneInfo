import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { FilterPipe } from '../../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';  
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit,OnDestroy  {

  news:News[];
  subscription:Subscription;
  admin:boolean;
  adminauth:boolean;
  userauth:boolean;
  today;
  dateTime;

  constructor(
    private newsService:NewsService,private authService:AuthService,private dataStorageService:DataStorageService,private route:ActivatedRoute,private router:Router
  ) { router.events.subscribe((val) => {
    if (val instanceof NavigationEnd){
        window.scrollTo(0,0);
    }
});}

  ngOnInit() {
    this.today=new Date();
    var date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    var time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
    if(this.today.getHours()<12){
      this.dateTime = date+' '+time+' am';
    }
    else{
      this.dateTime = date+' '+time+' pm';
    }
     this.dateTime=this.dateTime.toString();
    //console.log(typeof(this.dateTime));
    
    
    this.subscription=this.newsService.newsChanged.subscribe(
      (news:News[])=>{
        this.news=news;
      }
    );
    this.news=this.newsService.getNews();
    //this.dataStorageService.getNews();
    //this.dataStorageService.getReviews();
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
  onAdd(){
    this.router.navigate(['newNews']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
