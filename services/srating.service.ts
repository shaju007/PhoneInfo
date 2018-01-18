import { Injectable } from '@angular/core';
import { Srating } from '../models/srating.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SratingService {
  sratingChanged=new Subject<Srating[]>();
  private srating:Srating[] =[
    new Srating(4,'shaju','s7'),
    
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','samsung galaxy s6'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','samsung galaxy c7'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','iphone 10'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','iphone 7'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','htc-u-ultra'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','htc-desire-10-pro'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','asus-zenfone-v-v520kl'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','asus-zenfone-4-selfie-pro-zd552kl'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','nokia-8'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','nokia-7'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','huawei-mate10-pro'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','huawei-enjoy-7-plus'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','lg-v30'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','lg-stylus-3',),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','motorola-moto-g5s'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','motorola-moto-e4-plus'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','lenovo-k8-plus'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','lenovo-a6600'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','microsoft-lumia-950-xl'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','microsoft-lumia-650-s'),

    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','oppo-r11s-r'),
    new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','oppo-f5-new'),

   new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','oneplus-5'),
   new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','oneplus-3'),

   new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','zte-nubia-z17s'),
   new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','zte-blade-a601',),

new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','acer-liquid-x2-1'),
new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','acer-liquid-jade-2'),

new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','xiaomi-redmi-note-5a'),
new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','xiaomi-mi-note3'),

new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','sony-xperia-xa1-2017'),
new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','sony-xperia-xa'),

new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','plum-might-plus-ii'),
new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','plum-axe-lte'),

new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','vodafone-smart-speed-6'),
new Srating(1,'FTzCUkaxQxaKmISWlKQQOpo2ZHh2','vodafone-smart-e8'),

  ];
  constructor() { }
setSrating(srating:Srating[]){
    this.srating=srating;
    this.sratingChanged.next(this.srating.slice());
}  
getSrating(){
    return this.srating.slice();
  }

addSrating(srating:Srating){
  this.srating.push(srating);
  console.log(this.srating);
  
  this.sratingChanged.next(this.srating.slice());
}
updateSrating(index:number,like:number){
  this.srating[index].like=like;

  this.sratingChanged.next(this.srating.slice());
}
removedup(index:number){
  this.srating.splice(index,1)
}

}
