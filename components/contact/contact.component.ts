import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { DataStorageService } from '../../services/data-storage.service';
import { NewsService } from '../../services/news.service';
import { EmailService } from '../../services/email.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Email } from '../../models/email.model';
import { Email2 } from '../../models/email2.model';
import { Email2Service } from '../../services/email2.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  recipeForm:FormGroup;
  email2:Email2;
  today;
  dateTime;
  constructor(private route:ActivatedRoute,private newsService:NewsService,private dataStorageService:DataStorageService,private router:Router,private emailService:EmailService,private email2Service:Email2Service,public flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit(){
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
    this.email2={
      name:this.recipeForm.value.name,email:this.recipeForm.value.email,subject:this.recipeForm.value.subject,message:this.recipeForm.value.message,date:this.dateTime
    }
    console.log('email',this.recipeForm.value);
    
    this.emailService.addEmail(this.recipeForm.value);
    //console.log(this.recipeForm.value);
    
    this.dataStorageService.storeEmail().subscribe(
      (response:Response) => {
        //console.log(response);
      }
    );
    this.email2Service.addEmail(this.email2);
    this.dataStorageService.storeEmail2().subscribe(
      (response:Response) => {
       // console.log(response);
      }
    );
    this.flashMessagesService.show('Email is sent',{cssClass:'alert-success',timeout:2000})
    this.router.navigate(['/']);
  }
  private initForm(){
    let emailName='';
    let emailEmail='';
    let emailSubject='';
    let emailMessage='';
  this.recipeForm=new FormGroup({
    'name':new FormControl(emailName),
    'email':new FormControl(emailEmail,Validators.required),
    'subject':new FormControl(emailSubject,Validators.required),
    'message':new FormControl(emailMessage,Validators.required),
  });
  }

}
