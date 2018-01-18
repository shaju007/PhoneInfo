import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ReviewService } from '../../services/review.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,private reviewService:ReviewService,private dataStorageService:DataStorageService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
      }
    );
  }
  onSubmit(){
    if(this.editMode){
      
      console.log(this.recipeForm.value);
      this.reviewService.updateReview(this.id,this.recipeForm.value);
      this.dataStorageService.storeReviews().subscribe(
        (response:Response) => {
          console.log(response);
        }
      );
  
      this.router.navigate(['/detail/'+this.id]);
    }
    else{
      this.reviewService.addReview(this.recipeForm.value);
      console.log(this.recipeForm.value);
      
      this.dataStorageService.storeReviews().subscribe(
        (response:Response) => {
          console.log(response);
        }
      );
      this.router.navigate(['/']);
    }
    //this.onCancel();
  }
  private initForm(){
    let reviewImagePath='';
    let reviewModel='';
    let reviewBody='';
    let reviewPerformance='';
    let reviewPerImagePath='';
    let reviewHardware='';
    let reviewSoftware='';
    let reviewDisplay='';
    let reviewCamera='';
    let reviewBattery='';
    
      if(this.editMode){
        const review=this.reviewService.getReview(this.id);
        reviewImagePath=review.imagePath;
        reviewModel=review.model;
        reviewBody=review.body;
        reviewPerformance=review.performance;
        reviewPerImagePath=review.perImagePath;
        reviewHardware=review.hardware;
        reviewSoftware=review.software;
        reviewDisplay=review.display;
        reviewCamera=review.camera;
        reviewBattery=review.battery;
  }
  this.recipeForm=new FormGroup({
    'imagePath':new FormControl(reviewImagePath),
    'model':new FormControl(reviewModel,Validators.required),
    'body':new FormControl(reviewBody,Validators.required),
    'performance':new FormControl(reviewPerformance,Validators.required),
    'perImagePath':new FormControl(reviewPerImagePath,Validators.required),
    'hardware':new FormControl(reviewHardware,Validators.required),
    'software':new FormControl(reviewSoftware,Validators.required),
    'display':new FormControl(reviewDisplay,Validators.required),
    'camera':new FormControl(reviewCamera,Validators.required),
    'battery':new FormControl(reviewBattery,Validators.required),
  });
  }

}
