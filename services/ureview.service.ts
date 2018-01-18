import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ureview } from '../models/ureview.model';

@Injectable()
export class UreviewService {
  ureviewChanged=new Subject<Ureview[]>();
  startedEditing=new Subject<number>();
  private ureview:Ureview[] =[
    new Ureview('shaju','good phone','shaju','s7',''),
    
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','samsung galaxy s6',''),
    new Ureview('Kamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','samsung galaxy c7',''),

    new Ureview('Lahin','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','iphone 10',''),
    new Ureview('Rubel','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','iphone 7',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','htc-u-ultra',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','htc-desire-10-pro',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','asus-zenfone-v-v520kl',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','asus-zenfone-4-selfie-pro-zd552kl',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','nokia-8',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','nokia-7',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','huawei-mate10-pro',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','huawei-enjoy-7-plus',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','lg-v30',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','lg-stylus-3',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','motorola-moto-g5s',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','motorola-moto-e4-plus',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','lenovo-k8-plus',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','lenovo-a6600',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','microsoft-lumia-950-xl',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','microsoft-lumia-650-s',''),

    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','oppo-r11s-r',''),
    new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','oppo-f5-new',''),

   new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','oneplus-5',''),
   new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','oneplus-3',''),

   new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','zte-nubia-z17s',''),
   new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','zte-blade-a601',''),

new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','acer-liquid-x2-1',''),
new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','acer-liquid-jade-2',''),

new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','xiaomi-redmi-note-5a',''),
new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','xiaomi-mi-note3',''),

new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','sony-xperia-xa1-2017',''),
new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','sony-xperia-xa',''),

new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','plum-might-plus-ii',''),
new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','plum-axe-lte',''),

new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','vodafone-smart-speed-6',''),
new Ureview('Jamal','best phone','FTzCUkaxQxaKmISWlKQQOpo2ZHh2','vodafone-smart-e8',''),

  ];

  constructor() { }

setUreview(ureview:Ureview[]){
    this.ureview=ureview;
    this.ureviewChanged.next(this.ureview.slice());
}  
getUreviews(){
    return this.ureview.slice();
  }
  getUreview(index:number){
    return this.ureview[index];
  }

addUreview(ureview:Ureview){
  this.ureview.unshift(ureview);
  console.log(this.ureview);
  
  this.ureviewChanged.next(this.ureview.slice());
}
updateUreview(index:number,newReview:Ureview){
  this.ureview[index]=newReview;

  this.ureviewChanged.next(this.ureview.slice());
}
remove(index:number){
  this.ureview.splice(index,1);
  this.ureviewChanged.next(this.ureview.slice());
}

}
