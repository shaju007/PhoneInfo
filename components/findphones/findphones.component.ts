import { Component, OnInit,OnDestroy } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { Brand } from '../../models/brand.model';
import { FilterPipe } from '../../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';  
import { RadioControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { SratingService } from '../../services/srating.service';
import { Srating } from '../../models/srating.model';

@Component({
  selector: 'app-findphones',
  templateUrl: './findphones.component.html',
  styleUrls: ['./findphones.component.css']
})
export class FindphonesComponent implements OnInit,OnDestroy {
  filterBrands:any;
  brands:Brand[];
  memoryFilter = [{checked:false,memory:8},{checked:false,memory:16}, {checked:false,memory:32},{checked:false,ram:1},{checked:false,ram:2}, {checked:false,ram:4}];
  priceFilter = [{checked:false,price:300},{checked:false,price:500}, {checked:false,price:700},{checked:false,price:900},{checked:false,price:1100}, {checked:false,price:1300}];
  memC=0;
  ramC=0;
  pCk=0;
  mCk=0;
  ramFilter = [];
  filterArr = [];
  phoneArr=[];
  prUpd=[];
  prvFilBr=[];
  filterchk=false;
  tsRating:Srating[];
  givenStar:number;
  avgrate=0;
  del:number;
  avgrating:any;
  avgratingArr:any[];
  avgrating1:any;
  k:number;
  selectedFilterPhone=false;
  selectedFilterPhoneDetail;
  subscription:Subscription;
  constructor(private brandService:BrandService,private router:Router,private route:ActivatedRoute,private sratingService:SratingService) { 
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
          window.scrollTo(0,0);
      }
  });
  }

  ngOnInit() {
    this.ramC=0;
    this.memC=0;
    this.subscription=this.brandService.phonesChanged.subscribe(
      (brands:Brand[])=>{
        this.brands=brands;
      }
    );
    this.brands=this.brandService.getBrands();
    // this.filterBrands = this.brands;
    console.log(this.brands);
    for(let i=0;i<this.brands.length;i++){
      for(let j=0;j<this.brands[i].phones.length;j++){
        this.phoneArr.push(this.brands[i].phones[j]);
        //console.log(this.phoneArr);
        
      }
    }
    this.filterBrands = this.phoneArr;
    
  }
  filter(){
    this.filterchk=!this.filterchk;
    this.selectedFilterPhone=false;
  }
  bid(bid:number){
    this.brandService.bid=bid;
    console.log('bid',this.bid);
    
  }
  updateFilter(appt,i) {
    //window.scrollTo(500,500);
    this.mCk=1;
    this.pCk=0;
    this.priceFilter = [{checked:false,price:300},{checked:false,price:500}, {checked:false,price:700},{checked:false,price:900},{checked:false,price:1100}, {checked:false,price:1300}];
    
      if(i>2){
        this.filterArr[1]=appt.ram;
        console.log('apt.ram',appt.ram);
      }
      if(i<=2){
        console.log('16 1',i);
        
        this.filterArr[0]=appt.memory;
        console.log('filter[0]',this.filterArr[0]);
      }
        if(i>2){
          this.ramC++;
          console.log(this.ramC,'ramc');
          
          if(this.memC>0){
            this.filterBrands = this.phoneArr.filter(a => {
              // return this.filterArr.indexOf(a.status) != -1
             return this.filterArr.length ? this.filterArr.indexOf(a.memory) != -1 : this.brands
           });
            this.filterBrands = this.filterBrands.filter(a => {
              // return this.filterArr.indexOf(a.status) != -1
              return this.filterArr.length ? this.filterArr.indexOf(a.ram) != -1 : this.brands
           });
           
          }
          else{
            console.log('memc',this.memC);
            
            this.filterBrands = this.phoneArr.filter(a => {
              // return this.filterArr.indexOf(a.status) != -1
              return this.filterArr.length ? this.filterArr.indexOf(a.ram) != -1 : this.brands
           });
          }
          
        }
        if(i<=2){
          this.memC++;
          if(this.ramC>0){
            this.filterBrands = this.phoneArr.filter(a => {
              // return this.filterArr.indexOf(a.status) != -1
             return this.filterArr.length ? this.filterArr.indexOf(a.ram) != -1 : this.brands
            });
            console.log('ramc 2',this.ramC);
            this.filterBrands = this.filterBrands.filter(a => {
              // return this.filterArr.indexOf(a.status) != -1
              return this.filterArr.length ? this.filterArr.indexOf(a.memory) != -1 : this.brands
            });
          }
          else{
            console.log('ramc 2',this.ramC);
            
            this.filterBrands = this.phoneArr.filter(a => {
              // return this.filterArr.indexOf(a.status) != -1
             return this.filterArr.length ? this.filterArr.indexOf(a.memory) != -1 : this.brands
            });
          }
          }
          //return this.filterBrands;
    
    console.log('filterbrand',this.filterBrands);
  }
  priceUpdFilter(appt,i){
    //window.scrollTo(500,500);
    this.pCk++;
    this.prUpd=[];
      this.filterArr[2]=appt.price;
      console.log('apt.price',appt.price);
      if(this.mCk>0){
        if(this.pCk>1){
          this.filterBrands=this.prvFilBr;
        }
        this.prvFilBr=this.filterBrands;
          for(let j=0;j<this.filterBrands.length;j++){
            if(this.filterBrands[j].price>(appt.price-200) && this.filterBrands[j].price<appt.price){
              this.prUpd.push(this.filterBrands[j]);
            }
          }
          this.filterBrands=this.prUpd;
          console.log('filterbr from pudfilter',this.filterBrands);
          
        }
        
        else{
          for(let j=0;j<this.phoneArr.length;j++){
            if(this.phoneArr[j].price>(appt.price-200) && this.phoneArr[j].price<appt.price){
              this.prUpd.push(this.phoneArr[j]);
            }
          }
          this.filterBrands=this.prUpd;
          console.log('filterbr from pudfilter',this.filterBrands);
        }   
  }
  
  selectedFilter(phoneModel){
    console.log(phoneModel);
    this.brands=this.brandService.getBrands();
    for(let i=0;i<this.brands.length;i++){
      for(let j=0;j<this.brands[i].phones.length;j++){
        this.phoneArr.push(this.brands[i].phones[j]);
        if(phoneModel==this.brands[i].phones[j].model){
          this.brandService.bid=i;
          this.router.navigate(['/pdetail/'+j]);
        }
        //console.log(this.phoneArr);
        
      }
    }
    this.selectedFilterPhone=true;
    for(let i=0;i<this.phoneArr.length;i++){
      if(phoneModel==this.phoneArr[i].model){
        console.log(this.phoneArr[i].model);
        //console.log('checking if');
        this.filterchk=false;
        this.selectedFilterPhoneDetail=this.phoneArr[i];
        this.tsRating=this.sratingService.getSrating();
        this.k=0;
        this.avgrate=0
        this.avgrating1=0;
        for(let i=0;i<this.tsRating.length;i++){
          if(phoneModel==this.tsRating[i].model){
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
        console.log(this.selectedFilterPhoneDetail);
        
      }
    }
    window.scrollTo(0,0);
  }
  getStars(rating) {
    // Get the value
    var val = parseFloat(rating);
    // Turn value into number/100
    var size = val/5*100;
    return size + '%';
  }
  compare(comparePhone){
    this.brandService.compare.push(comparePhone);
    console.log(this.brandService.compare);
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
