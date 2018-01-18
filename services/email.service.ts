import { Injectable } from '@angular/core';
import { Email } from '../models/email.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EmailService {
  emailChanged=new Subject<Email[]>();
  private email:Email[] =[
    new Email('Raj','raj@test.com','raj','raj'),
  ]
  constructor() { }
  setEmail(email:Email[]){
    this.email=email;
    this.emailChanged.next(this.email.slice());
}  
  addEmail(email:Email){
    this.email.push(email);
  }
  getEmail(){
    return this.email.slice();
  }
}
