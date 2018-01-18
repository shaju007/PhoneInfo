import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { DataStorageService } from '../../services/data-storage.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,private newsService:NewsService,private dataStorageService:DataStorageService,private router:Router) { }

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
      this.newsService.updateNews(this.id,this.recipeForm.value);
      this.dataStorageService.storeNews().subscribe(
        (response:Response) => {
          console.log(response);
        }
      );
  
      this.router.navigate(['/newsdetail/'+this.id]);
    }
    else{
      this.newsService.addNews(this.recipeForm.value);
      console.log(this.recipeForm.value);
      
      this.dataStorageService.storeNews().subscribe(
        (response:Response) => {
          console.log(response);
        }
      );
      this.router.navigate(['news']);
    }
    //this.onCancel();
  }
  private initForm(){
    let newsImagePath='';
    let newsTitle='';
    let newsBody='';
    let newsDescription='';
    
      if(this.editMode){
        const news=this.newsService.getNew(this.id);
        newsImagePath=news.imagePath;
        newsTitle=news.title;
        newsBody=news.body;
        newsDescription=news.description;
  }
  this.recipeForm=new FormGroup({
    'imagePath':new FormControl(newsImagePath),
    'title':new FormControl(newsTitle,Validators.required),
    'body':new FormControl(newsBody,Validators.required),
    'description':new FormControl(newsDescription,Validators.required),
  });
  }

}
