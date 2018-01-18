import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand.model';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Response } from '@angular/http';
import { DataStorageService } from '../../services/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-allbrands',
  templateUrl: './allbrands.component.html',
  styleUrls: ['./allbrands.component.css']
})
export class AllbrandsComponent implements OnInit,OnDestroy {
  brands:Brand[];
  showadd=false;
  recipeForm:FormGroup;
  admin:boolean;
  adminauth:boolean;
  userauth:boolean;
  subscription:Subscription;
  constructor(private brandService:BrandService,private authService:AuthService,private dataStorageService:DataStorageService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.brandService.phonesChanged.subscribe(
      (brands:Brand[])=>{
        this.brands=brands;
        this.dataStorageService.getBrands();
        this.brands=this.brandService.getBrands();
      }
    );
    this.brands=this.brandService.getBrands();
    this.recipeForm=new FormGroup({
      'name':new FormControl(name,Validators.required),
    });
    if((localStorage.getItem('user')=='FTzCUkaxQxaKmISWlKQQOpo2ZHh2') || (localStorage.getItem('user')=='dH6SQbCzhKYOK7dmIJAgJ5P0Xbx2')){
      this.adminauth=true;
      //console.log(this.adminauth);
  }
  else{
      this.userauth=true;
      
  }
    this.admin=this.authService.adminauth;
    this.admin=this.adminauth;
    //console.log('admin',this.admin);
    
    this.authService.adminChange2.subscribe(
      (adminChange2:boolean)=>{
        this.admin=adminChange2;
        //console.log('fav3c adminchange2',this.admin);
        
      }
    );
  }
  onSubmit(){
      this.brandService.brands.push(this.recipeForm.value);
      this.dataStorageService.storeBrands().subscribe(
        (response:Response) => {
          //console.log(response);
        }
      );
      this.dataStorageService.getBrands();
      this.brands=this.brandService.getBrands();
      this.router.navigate(['/']);
      this.recipeForm.reset();
  }
  addBrand(){
    this.showadd=!this.showadd;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  

}
