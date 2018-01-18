import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../services/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Brand } from '../../models/brand.model';
import { Srating } from '../../models/srating.model';
import { SratingService } from '../../services/srating.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RatingService } from '../../services/rating.service';
import { Toprating } from '../../models/toprating.model';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
brands:Brand[];
tsRating:Srating[];
topratingarr:Toprating;
topratingarr2=[];
avgrate=0;
del:number;
avgrating:any;
k:number;
m=0;
temp:any;
  constructor(private dataStorageService:DataStorageService,
    private brandService:BrandService,private sratingService:SratingService) { }

  ngOnInit() {
    
    this.brandService.phonesChanged.subscribe(
      (brands:Brand[])=>{
        this.brands=brands;
        
      }
    );
    this.brands=this.brandService.getBrands();
    this.sratingService.sratingChanged.subscribe(
      (tsRating:Srating[])=>{
        this.tsRating=tsRating;
      }
    );
    this.tsRating=this.sratingService.getSrating();
    
    
    
    this.k=0;
    this.avgrate=0
    this.avgrating=0;
    this.topratingarr2=[];
    
    
    var youArray:Array<any>= [{
      "avgrate2": 1,
      "model": "s10",
      
  },
  ];
  
    for(let i=0;i<this.brands.length;i++){
      this.k=0;
      this.avgrate=0
      this.avgrating=0;
      for(let j=0;j<this.brands[i].phones.length;j++){
        this.k=0;
        this.avgrate=0
        this.avgrating=0;
        for(let k=0;k<this.tsRating.length;k++){
          if(this.brands[i].phones[j].model==this.tsRating[k].model){
              this.avgrate=(this.tsRating[k].like+this.avgrate);
              this.k++;
             
              
          }
          //console.log(this.avgrating);
        }
        if(this.k==0 && this.avgrate==0){
          this.avgrating=0;
        }
        else{
          this.avgrating=(this.avgrate/this.k);
          
        //   var youArray:Array<any>= [{
        //     "avgrate2": 1,
        //     "model": "s10",
            
        // },
        // ];
        
        var resultArray:Array<any>=[] //empty array which we are going to push our selected items, always define types 
        
       
           resultArray.push(
           {
            "avgrate2":this.avgrating,
            "model":this.brands[i].phones[j].model
           });
           
           
        
        
       
          
        
          
          this.topratingarr2.push(resultArray[0]);
          // this.topratingarr2[this.m]=resultArray[0];
          // this.m++;
          
          
        }
      }
    }
   
    
    for(let i=0;i<(this.topratingarr2.length-1);i++){
      for(let j=i+1;j<(this.topratingarr2.length);j++){
        this.temp=[];
        if(this.topratingarr2[i].avgrate2<this.topratingarr2[j].avgrate2){
          
          
          this.temp[1]=this.topratingarr2[j];
          
          
          this.topratingarr2[j]=this.topratingarr2[i];
          this.topratingarr2[i]=this.temp[1];
        }
      }
     
    }
   
    
  }
  getStars(rating) {
    // Get the value
    var val = parseFloat(rating);
    // Turn value into number/100
    var size = val/5*100;
    return size + '%';
  }
  bid(bid:number){
    this.brandService.bid=bid;
    
    
  }

}
