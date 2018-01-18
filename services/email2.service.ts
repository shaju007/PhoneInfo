import { Injectable } from '@angular/core';
import { Email2 } from '../models/email2.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Email2Service {

  emailChanged2=new Subject<Email2[]>();
  private email2:Email2[] =[
    new Email2('Raj','raj@test.com','raj','raj',''),
  ]
  constructor() { }
  setEmail(email2:Email2[]){
    this.email2=email2;
    this.emailChanged2.next(this.email2.slice());
}  
  addEmail(email2:Email2){
    this.email2.unshift(email2);
  }
  getEmail(){
    return this.email2.slice();
  }
  remove(index:number){
    this.email2.splice(index,1);
    this.emailChanged2.next(this.email2.slice());
  }

}
