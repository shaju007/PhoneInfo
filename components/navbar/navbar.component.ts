import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { Response } from '@angular/http';
import { BrandService } from '../../services/brand.service';
import { AuthService } from '../../auth/auth.service';
import { FavouriteService } from '../../services/favourite.service';
import { Favourite } from '../../models/favourite.model';
import { Email2Service } from '../../services/email2.service';
import { Email2 } from '../../models/email2.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
id:number;
admin:any;
adminauth:boolean;
userauth:boolean;
fav3cntChange:number;
fav2cnt=0;
favourite2:Favourite[];
userID:any;
emails:Email2[];
  constructor(private email2Service:Email2Service,private dataStorageService:DataStorageService,private brandService:BrandService,private route:ActivatedRoute,private router:Router,private authService:AuthService,private favouriteService:FavouriteService) { 
    //this.onSaveData();
    this.onFetchData();
    
    
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
      }
    );
    this.email2Service.emailChanged2.subscribe(
      (emails:Email2[])=>{
        this.emails=emails;
      }
    );
    this.emails=this.email2Service.getEmail();
    //this.onSaveData();
    
    
    // this.favourite2=this.favouriteService.getFavourite();
    // for(let i=0;i<this.favourite2.length;i++){
    //   if(this.favourite2[i].uid==this.userID){
    //     this.fav2cnt++;
        
    //   }      
    // }
    
    // this.favouriteService.favcount(this.fav2cnt);
    this.userID=localStorage.getItem('user');
    this.favouriteService.favouriteChanged.subscribe(
      (favourite1:Favourite[])=>{
        this.favourite2=favourite1;
        for(let i=0;i<this.favourite2.length;i++){
             if(this.favourite2[i].uid==this.userID){
               this.fav2cnt++;
              
             }      
           }
           this.favouriteService.favcount(this.fav2cnt);
      }
    );

    this.favouriteService.fav3cntChange.subscribe(
      (fav3cntChange:number)=>{
        this.fav3cntChange=fav3cntChange;
        //console.log('fav3c',this.fav3cntChange);
        
      }
    );
    //this.fav3cntChange=this.favouriteService.fav3cnt;
    if((localStorage.getItem('user')=='FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user')=='dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')){
      this.adminauth=true;
      //console.log(this.adminauth);
  }
  else{
      this.userauth=true;
  }
    this.admin=this.authService.adminauth;
    this.admin=this.adminauth;
    this.authService.adminChange2.subscribe(
      (adminChange2:boolean)=>{
        this.admin=adminChange2;
        //console.log('fav3c adminchange2',this.admin);
        
      }
    );
  }
  onSaveData(){
    this.dataStorageService.storeBrands().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );

    this.dataStorageService.storeReviews().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );

    this.router.navigate(['']);
  }
  onFetchData(){
    this.dataStorageService.getBrands();
    this.dataStorageService.getReviews();
    this.dataStorageService.getNews();
    this.dataStorageService.getEmail2();
    this.dataStorageService.getRating();
    this.dataStorageService.getSrating();
    this.dataStorageService.getUreview();
    this.dataStorageService.getFavourite();

    // this.userID=localStorage.getItem('user');
    // console.log(this.userID);
    
    // this.fav2cnt=0;
    
    
    // this.favourite2=this.favouriteService.getFavourite();
    // for(let i=0;i<this.favourite2.length;i++){
    //   console.log('fav cnt',this.fav2cnt);
    //   console.log('id',this.favourite2[i].uid);
      
    //   if(this.favourite2[i].uid==this.userID){
    //     this.fav2cnt++;
    //     console.log('fav cnt',this.fav2cnt);
    //   }      
    // }
    // console.log('fav cnt',this.fav2cnt);
    // this.favouriteService.favcount(this.fav2cnt);
    // this.favouriteService.fav3cntChange.subscribe(
    //   (fav3cntChange:number)=>{
    //     this.fav3cntChange=fav3cntChange;
    //   }
    // );
    // this.fav3cntChange=this.favouriteService.fav3cnt;
    

    this.router.navigate(['']);
  }
  onLogout(){
    this.authService.logout();
    this.admin=false;
    this.router.navigate(['']);
  }

}
