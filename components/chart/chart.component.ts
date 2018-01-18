import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public loading = false;
  
  constructor(private authService:AuthService,public flashMessagesService: FlashMessagesService,
    public router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.loading=true;
    const email=form.value.email;
    this.authService.resetPassword(email)
    .catch((err)=>{
      this.loading=false;
    });
  }

}
