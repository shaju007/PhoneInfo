import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BrandService } from '../../services/brand.service';
import { Response } from '@angular/http';
import { Brand } from '../../models/brand.model';
import { DataStorageService } from '../../services/data-storage.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  bid:number;
  id:number;
  phone:any;
  editMode=false;
  new:boolean;
  len:any;
  add:boolean;
  edit:boolean;
  addp=true;
  recipeForm:FormGroup;

  constructor(private location: Location,private route:ActivatedRoute,private brandService:BrandService,private dataStorageService:DataStorageService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        
        this.editMode=params['id']!=null;
        if(!this.add){
          console.log("initform");
          
          this.initForm();
        }
        
        
      }
    );
    this.new=this.brandService.new;
    this.edit=this.brandService.edit;
    console.log(this.new);
    console.log(this.edit);

    this.len=this.recipeForm.get('phones.length');
    console.log(typeof this.len);
    
    
  }
  onSubmit(){
    if(this.editMode){
      this.bid=this.brandService.bid;
      console.log(this.recipeForm.value);
      
      this.brandService.updateBrand(this.id,this.bid,this.recipeForm.value);
      this.dataStorageService.storeBrands().subscribe(
        (response:Response) => {
          console.log(response);
        }
      );

      if(this.edit){
        this.router.navigate(['/pdetail/'+this.id]);
      }
      else if(this.new){
        this.router.navigate(['/slbrand/'+this.bid]);
      }
      
    }
    else{
      this.brandService.addBrand(this.recipeForm.value);
    }
    //this.onCancel();
  }
  onAddPhone(){
    this.addp=false;
    this.add=true;
    console.log(this.add);
    console.log(this.recipeForm.get('phones'));
    this.len=this.recipeForm.get('phones.length');
    console.log(typeof this.len);
    
    
    (<FormArray>this.recipeForm.get('phones')).push(
      new FormGroup({
        'imagePath':new FormControl(null),
        'memory':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'model':new FormControl(null,Validators.required),
        'ram':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'display':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+\.?[0-9]*$/)]),
        'frontCamera':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'backCamera':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'os':new FormControl(null,Validators.required),
        'cpu':new FormControl(null,Validators.required),
        'battery':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'price':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+\.?[0-9]*$/)]),
        
      })
    );
  }
  onDeleteIngredient(index:number){
    //(<FormArray>this.recipeForm.get('phones')).removeAt(index);
    this.bid=this.brandService.bid;
    this.brandService.brands[this.bid].phones.splice(this.id,1);
    this.dataStorageService.storeBrands().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
    this.router.navigate(['/slbrand/'+this.bid]);
  }
  private initForm(){
    
    let brandName='';
    let brandPhones=new FormArray([]);
    this.bid=this.brandService.bid;
    let brand=this.brandService.getBrand(this.bid);
    brandName=brand.name;


    if(this.editMode){
      this.bid=this.brandService.bid;
      const brand=this.brandService.getBrand(this.bid);
      brandName=brand.name;
     
     
      
      
          //this.phone=brand.phones[this.id]
          //this.phone=this.brandService.getPhone(this.id,this.bid);
          for(let phone of brand.phones ){
          brandPhones.push(
            new FormGroup({
              'imagePath':new FormControl(phone.imagePath),
              'memory':new FormControl(phone.memory,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'model':new FormControl(phone.model,Validators.required),
              'ram':new FormControl(phone.ram,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'display':new FormControl(phone.display,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'frontCamera':new FormControl(phone.frontCamera,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'backCamera':new FormControl(phone.backCamera,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'os':new FormControl(phone.os,Validators.required),
              'cpu':new FormControl(phone.cpu,Validators.required),
              'battery':new FormControl(phone.battery,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'price':new FormControl(phone.price,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          );
        
      
    }

   
  }
  this.recipeForm=new FormGroup({
    'name':new FormControl(brandName,Validators.required),
    'phones':brandPhones,
  });
  }
  

}
