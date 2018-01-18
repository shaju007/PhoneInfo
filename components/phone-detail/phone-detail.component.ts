import { Component, OnInit, Input, OnDestroy,ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { Phone } from '../../models/phone.model';
import { Brand } from '../../models/brand.model';
import { AuthService } from '../../auth/auth.service';
import { Review } from '../../models/review.model';
import { ReviewService } from '../../services/review.service';
import {Location} from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs/Subscription';
import { RatingService } from '../../services/rating.service';
import { Rating } from '../../models/rating.model';
import { Response } from '@angular/http';
import { DataStorageService } from '../../services/data-storage.service';
import { SratingService } from '../../services/srating.service';
import { Srating } from '../../models/srating.model';
import { Ureview } from '../../models/ureview.model';
import { UreviewService } from '../../services/ureview.service';
import { FavouriteService } from '../../services/favourite.service';
import { Favourite } from '../../models/favourite.model';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  // @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  //   console.log($event);
  //   console.log($event.target.scrollingElement.scrollTop);
  //   console.log("scrolling");
  // } 
  
  editMode=false;
  editedItemIndex:number;
  editedItem:Ureview;
  ureviews: Ureview[];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    animation: {
      onComplete: function () {
          var chartInstance = this.chart,
          ctx = chartInstance.ctx;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                  var data = dataset.data[index];
                  ctx.fillText(data, bar._model.x, bar._model.y - 5);
              });
          });
      }
  },
  events: ['mouseout'],
  legend:{
    //display:false,
    // position:'left',
    labels: {
      
      boxWidth: 0,
     
    }
  },
    scales : {
           yAxes: [{
            gridLines: {           
              display:false,
              color: 'black',
              zeroLineColor: 'black',
              zeroLineWidth: 4,
              //scaleShowLabels: false,
          },       
            // scaleLabel:{
            //   display:true,
            //   labelString:'Date'
            //   },
              ticks: {
                
                display: false,
                min: 0,
                stepSize: 1,
               }
           }] ,
           xAxes: [{
            gridLines: {
              display:false,
              zeroLineWidth: 4,
          },
            // Change here
          barPercentage: 0.4,
        }]
         }
  };
 
id:number;
bid:number;
edit:boolean;
new:boolean;
brands:any;
brand:any;
phone:any;
name:string;
today;
dateTime;
lk=0;
dlk=0;
likee:boolean;
dislikee:boolean;
rLike:boolean;
rDislike:boolean;
lck=false;
sck=false;
dck=false;
lcolor=false;
dcolor=false;
msglike=0;
msgdislike=0;
reviews:Review[];
favourite1:Favourite[];
favourite2:Favourite[];
fav2cnt=0;
admin:boolean;
adminauth:boolean;
userauth:boolean;
userID:any;
rating:Rating;
tRating:Rating[];
srating:Srating;
favourite:Favourite;
favCk:boolean;
favCk2=false;
tsRating:Srating[];
showText=0;
givenStar:number;
chkgstr=0;
avgrate=0;
del:number;
avgrating:any;
k:number;
dstar:number;
empReview=0;
empLen=false;
empUreview=0;
empUrLen=false;
one=0;
two=0;
three=0;
four=0;
five=0;
scrollTop=2800;
maxlength=80;
characterleft=this.maxlength;
barChartLabels:string[];
barChartType:string;
barChartLegend:boolean;
barChartData:any[];

star = [{checked:false,st:1},{checked:false,st:2}, {checked:false,st:3},{checked:false,st:4},{checked:false,st:5}];
subscription:Subscription;

  constructor(private location: Location,private dataStorageService:DataStorageService,
    private brandService:BrandService,private reviewService:ReviewService,private authService:AuthService,public flashMessagesService: FlashMessagesService,private route:ActivatedRoute,private router:Router,private ratingService:RatingService,private sratingService:SratingService,private ureviewService:UreviewService,private favouriteService:FavouriteService
  ) { 
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
        this.bid=this.brandService.bid;
        console.log(this.bid);
        this.phone=this.brandService.getPhone(this.id,this.bid);
        this.dstar=this.phone.like;
      }
    );
    this.subscription=this.reviewService.reviewsChanged.subscribe(
      (reviews:Review[])=>{
        this.reviews=reviews;
      }
    );
    this.reviews=this.reviewService.getReviews();
    for(let i=0;i<this.reviews.length;i++){
      if(this.phone.model!=this.reviews[i].model){
        this.empReview++;
      }
      if(this.phone.model==this.reviews[i].model){
        this.empLen=false;
        this.empReview=-1;
      }
      if((this.empReview+1)==this.reviews.length){
        this.empLen=true;
        //  console.log('if empty',this.reviews.length);
        //  console.log(this.empReview);
      }
    }
    this.userID=localStorage.getItem('user');
    this.subscription=this.favouriteService.favouriteChanged.subscribe(
      (favourite1:Favourite[])=>{
        this.favourite1=favourite1;
      }
    );
    this.favourite1=this.favouriteService.getFavourite();
    for(let i=0;i<this.favourite1.length;i++){
      if(this.favourite1[i].uid==this.userID && this.favourite1[i].model==this.phone.model){
        //this.sck=true;
        //this.lcolor=true;
        this.favCk=true;
        this.favCk2=true;
        //console.log('shaju sjas 777');
        
      }      
    }
    if(this.favCk2==false){
      this.favCk==false;
    }
    this.fav2cnt=0;
    this.favourite2=this.favouriteService.getFavourite();
    for(let i=0;i<this.favourite2.length;i++){
      //console.log('id',this.favourite2[i].uid);
      if(this.favourite2[i].uid==this.userID){
        this.fav2cnt++;
      }      
    }
    //console.log('fav cnt',this.fav2cnt);
    this.favouriteService.favcount(this.fav2cnt);
    this.subscription=this.sratingService.sratingChanged.subscribe(
      (tsRating:Srating[])=>{
        this.tsRating=tsRating;
      }
    );
    this.tsRating=this.sratingService.getSrating();

    this.ureviews=this.ureviewService.getUreviews();
    this.subscription=this.ureviewService.ureviewChanged.subscribe(
      (ureviews:Ureview[])=>{
        this.ureviews=ureviews;
      }
    );
    //this.ureviews=this.ureviewService.getUreviews();
    for(let i=0;i<this.ureviews.length;i++){
      if(this.phone.model!=this.ureviews[i].model){
        this.empUreview++;
      }
      if(this.phone.model==this.ureviews[i].model){
        this.empUrLen=false;
        this.empUreview=-1;
      }
      if((this.empUreview+1)==this.ureviews.length){
        this.empUrLen=true;
        //  console.log('if empty',this.reviews.length);
        // console.log(this.empReview);
      }
    }
    this.name=localStorage.getItem('name');
    console.log(this.name);
    
    this.subscription=this.ureviewService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.ureviewService.getUreview(index);
        this.slForm.setValue({
          comment:this.editedItem.comment,
        });
        this.characterleft=this.maxlength-this.editedItem.comment.length;
      }
    );
    
    this.k=0;
    this.avgrate=0
    this.avgrating=0;
    for(let i=0;i<this.tsRating.length;i++){
      if(this.phone.model==this.tsRating[i].model){
          this.avgrate=(this.tsRating[i].like+this.avgrate);
          this.k++;
          //console.log('tsra',this.tsRating[i].like);
          
      }
      //console.log(this.avgrating);
    }
    if(this.k==0 && this.avgrate==0){
      this.avgrating=0;
    }
    else{
      this.avgrating=(this.avgrate/this.k);
    }
    if((localStorage.getItem('user')=='FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user')=='dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')){
      this.adminauth=true;
     // console.log(this.adminauth);
  }
  else{
      this.userauth=true;
  }
    this.admin=this.authService.adminauth;
    this.admin=this.adminauth;
    this.userID=localStorage.getItem('user');
    for(let i=0;i<this.tsRating.length;i++){
      if(this.tsRating[i].uid==this.userID && this.tsRating[i].model==this.phone.model){
        this.sck=true;
        this.lcolor=true;
        this.chkgstr=1;
        this.givenStar=this.tsRating[i].like;
        //console.log(this.givenStar);
        //console.log('shaju');
      }
      else if(this.chkgstr==0){
        this.givenStar=0;
        //console.log(this.givenStar);
        //console.log('shaju oooo');
      }
    }
    for(let i=0;i<this.tsRating.length;i++){
      if(this.phone.model==this.tsRating[i].model){
          if(this.tsRating[i].like==1){
            this.one++;
          }
          else if(this.tsRating[i].like==2){
            this.two++;
          }
          else if(this.tsRating[i].like==3){
            this.three++;
          }
          else if(this.tsRating[i].like==4){
            this.four++;
          }
          else if(this.tsRating[i].like==5){
            this.five++;
          }
      }
    }
    //console.log('one,two',this.one,this.two,this.three,this.four,this.five);
    this.barChartLabels = ['1 star', '2 star', '3 star', '4 star', '5 star'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    
    this.barChartData = [{
      data: [this.one, this.two, this.three, this.four, this.five], 
      label: ' ',
      
    },
      
      
    ];
    
  }
  onEditItem(index:number,e){
    this.ureviewService.startedEditing.next(index);
    //this.editMode=true;
    //console.log(e);
    
    this.scrollTop=e.toElement.offsetTop;
    //console.log('scrolltop',this.scrollTop);
    
    window.scrollTo(3500,3500);
  }
  show(e){
    console.log(e);
    this.showText=e;
    
  }
  addFav(model){
    this.favCk=true;
    this.favourite={
      bid:this.bid,uid:this.userID,model:model
    };
    this.favouriteService.addFavourite(this.favourite);
    this.dataStorageService.storeFavourite().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
    //console.log('fav',this.favourite);
    this.flashMessagesService.show('Added to my favourites',{cssClass:'alert-success',timeout:2000});
    this.fav2cnt=0;
    this.favourite2=this.favouriteService.getFavourite();
    for(let i=0;i<this.favourite2.length;i++){
      if(this.favourite2[i].uid==this.userID){
        this.fav2cnt++;
      }      
    }
    //console.log('fav cnt',this.fav2cnt);
    this.favouriteService.favcount(this.fav2cnt);
  }
  
  count(msg){
    if(this.maxlength>=msg.length){
      this.characterleft=(this.maxlength)-(msg.length);
    }
    else{
       msg = msg.substr(0, msg.length - 1);
       console.log(msg);
    }
  }
  
  getStars(rating) {
    // Get the value
    var val = parseFloat(rating);
    // Turn value into number/100
    var size = val/5*100;
    return size + '%';
  }
  
  
  onEditPhone(){
    this.brandService.edit=true;
    this.brandService.new=false;
    this.bid=this.brandService.bid;
    
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  deletePhone(){
    this.brandService.edit=true;
    this.brandService.new=false;
    this.bid=this.brandService.bid;
    this.brandService.brands[this.bid].phones.splice(this.id,1);
    this.dataStorageService.storeBrands().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
    this.router.navigate(['/slbrand/'+this.bid]);
    //this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onAdd(){
    this.router.navigate(['newRev']);
  }
  compare(comparePhone){
    this.brandService.compare.push(comparePhone);
    console.log(this.brandService.compare);
    
  }
  removeFav(){
    this.favCk=false;
    this.favourite1=this.favouriteService.getFavourite();
    console.log(this.favourite1);
    
    for(let i=0;i<this.favourite1.length;i++){
      if(this.favourite1[i].uid==this.userID && this.favourite1[i].model==this.phone.model){
        //this.sck=true;
        //this.lcolor=true;
        // this.givenStar=this.tsRating[i].like;
        this.favouriteService.deleteFavourite(i);
        this.dataStorageService.storeFavourite().subscribe(
          (response:Response) => {
            console.log(response);
          }
        );
        //console.log('shaju');
      }
      //console.log('shaju');
      
    }
    this.flashMessagesService.show('Removed from my favourites',{cssClass:'alert-success',timeout:2000});
    this.fav2cnt=0;
    this.favourite2=this.favouriteService.getFavourite();
    for(let i=0;i<this.favourite2.length;i++){
      if(this.favourite2[i].uid==this.userID){
        this.fav2cnt++;
      }      
    }
    //console.log('fav cnt',this.fav2cnt);
    this.favouriteService.favcount(this.fav2cnt);
    
  }
  delete(){
    for(let i=0;i<this.tsRating.length;i++){
      if(this.tsRating[i].uid==this.userID && this.tsRating[i].model==this.phone.model){
        this.sck=true;
        this.lcolor=true;
        // this.givenStar=this.tsRating[i].like;
        this.sratingService.removedup(i);
        this.dataStorageService.storeSrating().subscribe(
          (response:Response) => {
            console.log(response);
          }
        );
        console.log('shaju');
      }
    }
    this.k=0;
    this.avgrate=0
    this.avgrating=0;

    this.tsRating=this.sratingService.getSrating();
    this.one=0;
    this.two=0;
    this.three=0;
    this.four=0;
    this.five=0;
    for(let i=0;i<this.tsRating.length;i++){
      if(this.phone.model==this.tsRating[i].model){
        if(this.tsRating[i].like==1){
          this.one++;
        }
        else if(this.tsRating[i].like==2){
          this.two++;
        }
        else if(this.tsRating[i].like==3){
          this.three++;
        }
        else if(this.tsRating[i].like==4){
          this.four++;
        }
        else if(this.tsRating[i].like==5){
          this.five++;
        }
          this.avgrate=(this.tsRating[i].like+this.avgrate);
          this.k++;
          console.log('tsra delete',this.tsRating[i].like);
          
      }
    }
    this.barChartLabels = ['1 star', '2 star', '3 star', '4 star', '5 star'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      {data: [this.one, this.two, this.three, this.four, this.five], label: ' '},
    ];
    console.log(this.avgrate);
    
    if(this.k==0 && this.avgrate==0){
      this.avgrating=0;
    }
    else{
      this.avgrating=(this.avgrate/this.k);
    }
    console.log(this.avgrating);
    
    
      this.givenStar=0;
  }
  srate(stValue){
    this.showText=0;
    if(!this.authService.isAuthenticated()){
      this.flashMessagesService.show('Please Log in',{cssClass:'alert-danger',timeout:2000});
    }
    else{
      
      for(let i=0;i<this.tsRating.length;i++){
        if(this.tsRating[i].uid==this.userID && this.tsRating[i].model==this.phone.model){
          this.sck=true;
          this.lcolor=true;
          // this.givenStar=this.tsRating[i].like;
          this.sratingService.removedup(i);
          console.log('shaju');
        }
      }
      if(this.sck){
        
        this.srating=
        {like:stValue,uid:this.userID,model:this.phone.model}
        this.sratingService.addSrating(this.srating);
        this.dataStorageService.storeSrating().subscribe(
          (response:Response) => {
            console.log(response);
          }
        );
        console.log(this.srating);
      }
      else{
        
        this.srating=
          {like:stValue,uid:this.userID,model:this.phone.model},
        this.sratingService.addSrating(this.srating);
        this.dataStorageService.storeSrating().subscribe(
          (response:Response) => {
            console.log(response);
          }
        );
        console.log(this.srating);
      }
      this.k=0;
      this.avgrate=0
      this.avgrating=0;

      //this.tsRating=this.sratingService.getSrating();
      this.one=0;
      this.two=0;
      this.three=0;
      this.four=0;
      this.five=0;
      for(let i=0;i<this.tsRating.length;i++){
        if(this.phone.model==this.tsRating[i].model){
          if(this.tsRating[i].like==1){
            this.one++;
          }
          else if(this.tsRating[i].like==2){
            this.two++;
          }
          else if(this.tsRating[i].like==3){
            this.three++;
          }
          else if(this.tsRating[i].like==4){
            this.four++;
          }
          else if(this.tsRating[i].like==5){
            this.five++;
          }
            this.avgrate=(this.tsRating[i].like+this.avgrate);
            this.k++;
            console.log('tsra',this.tsRating[i].like);
            
        }
      }
      this.barChartLabels = ['1 star', '2 star', '3 star', '4 star', '5 star'];
      this.barChartType = 'bar';
      this.barChartLegend = true;
      this.barChartData = [
        {data: [this.one, this.two, this.three, this.four, this.five], label: ' '},
      ];
     // console.log(this.avgrate);
      
      this.avgrating=(this.avgrate/this.k);
     // console.log(this.avgrating);
        this.givenStar=stValue;
    }

  }

  onAddItem(form:NgForm) {
    const value=form.value;
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
    const newUreview = new Ureview(this.name, value.comment,this.userID,this.phone.model,this.dateTime);
    if(this.editMode){
      this.ureviewService.updateUreview(this.editedItemIndex,newUreview);
      this.dataStorageService.storeUreview().subscribe(
        (response:Response) => {
          console.log(response);
        }
      );
      window.scrollTo(0,this.scrollTop);
      this.scrollTop=2800;
    }
    else{
      this.empUrLen=false;
      this.ureviewService.addUreview(newUreview);
      this.dataStorageService.storeUreview().subscribe(
        (response:Response) => {
          console.log(response);
        }
      );   
    }
    this.editMode=false;
    form.reset();
    this.characterleft=this.maxlength;
    
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
    this.characterleft=this.maxlength;
    window.scrollTo(0,this.scrollTop);
    this.scrollTop=2800;
    
  }
  onDelete(){
    this.ureviewService.remove(this.editedItemIndex);
    this.dataStorageService.storeUreview().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
    
    this.onClear();
    
  }
  onDeleteAdm(i){
    this.ureviewService.remove(i);
    this.dataStorageService.storeUreview().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
    
    //this.onClear();
    
  }

  gotop(){
    window.scrollTo(0,0);
  }

  goBack(){
    this.location.back();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
