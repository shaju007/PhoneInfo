import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { FilterPipe } from '../../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';  
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Brand } from '../../models/brand.model';
import {Location} from '@angular/common';
import { Srating } from '../../models/srating.model';
import { SratingService } from '../../services/srating.service';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
phoneCompare;
brands:Brand[];
phone:any;
phone2:any;
hide:boolean;
hide2:boolean;
rest:boolean;
srating:Srating;
tsRating:Srating[];
givenStar:number;
avgrate=0;
del:number;
avgrating:any;
avgratingArr:any[];
avgrating1:any;
avgrating2:any;
k:number;
dstar:number;
one=0;
two=0;
three=0;
four=0;
five=0;
barChartLabels:string[];
barChartType:string;
barChartLegend:boolean;
barChartData:any[];
subscription:Subscription;
  constructor(private dataStorageService:DataStorageService,
    private brandService:BrandService,private route:ActivatedRoute,private router:Router,private sratingService:SratingService) { }

  ngOnInit() {
    
    this.brands=this.brandService.getBrands();

    this.phoneCompare=this.brandService.compare;
    this.subscription=this.sratingService.sratingChanged.subscribe(
      (tsRating:Srating[])=>{
        this.tsRating=tsRating;
      }
    );
    this.tsRating=this.sratingService.getSrating();
    this.k=0;
    this.avgrate=0
    this.avgrating=0;
    this.avgratingArr=[];
    for(let i=0;i<this.phoneCompare.length;i++){
      this.k=0;
      this.avgrate=0
      this.avgrating=0;
      for(let j=0;j<this.tsRating.length;j++){
        if(this.phoneCompare[i].model==this.tsRating[j].model){
            this.avgrate=(this.tsRating[j].like+this.avgrate);
            this.k++;
            console.log('tsra',this.tsRating[i].like);
        }
      }
      if(this.k==0 && this.avgrate==0){
        this.avgratingArr[i]=0;
      }
      else{
        this.avgratingArr[i]=(this.avgrate/this.k);
      }
      //console.log(this.avgrating);
    }
    
    

  }
  getStars(rating) {
    // Get the value
    var val = parseFloat(rating);
    // Turn value into number/100
    var size = val/5*100;
    return size + '%';
  }
  bid(id:number,bid:number){
    this.hide=true;
    this.brandService.bid=bid;
    this.phone=this.brandService.getPhone(id,bid);
    window.scrollTo(0,0);
    console.log('bid',this.bid);
    this.tsRating=this.sratingService.getSrating();
    this.k=0;
    this.avgrate=0
    this.avgrating1=0;
    for(let i=0;i<this.tsRating.length;i++){
      if(this.phone.model==this.tsRating[i].model){
          this.avgrate=(this.tsRating[i].like+this.avgrate);
          this.k++;
          console.log('tsra',this.tsRating[i].like);
          
      }
      //console.log(this.avgrating);
    }
    if(this.k==0 && this.avgrate==0){
      this.avgrating1=0;
    }
    else{
      this.avgrating1=(this.avgrate/this.k);
    }
    
  }
  bid2(id:number,bid:number){
    this.hide2=true;
    this.brandService.bid=bid;
    this.phone2=this.brandService.getPhone(id,bid);
    window.scrollTo(0,0);
   console.log('bid',this.bid);
   this.tsRating=this.sratingService.getSrating();
   this.k=0;
   this.avgrate=0
   this.avgrating2=0;
   for(let i=0;i<this.tsRating.length;i++){
     if(this.phone2.model==this.tsRating[i].model){
         this.avgrate=(this.tsRating[i].like+this.avgrate);
         this.k++;
         console.log('tsra',this.tsRating[i].like);
         
     }
     //console.log(this.avgrating);
   }
   if(this.k==0 && this.avgrate==0){
     this.avgrating2=0;
   }
   else{
     this.avgrating2=(this.avgrate/this.k);
   }
    
  }
  hidee(){
    this.hide=false;
  }
  hidee2(){
    this.hide2=false;
  }
  reset(){
    this.brandService.compare=[];
    this.rest=true;
    this.avgratingArr=[];
    
  }

}
