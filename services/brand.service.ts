import { Injectable } from '@angular/core';
import { Brand } from '../models/brand.model';
import { Phone } from '../models/phone.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BrandService {
 phonesChanged=new Subject<Brand[]>();
 bid:number;
 brand:any;
 new:boolean;
 edit:boolean;
  public brands:Brand[] =[
    new Brand('Samsung',[
      new Phone('samsung-galaxy-s6-edge-plus',32,'samsung galaxy s6',2,6,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3200,800),
      new Phone('samsung-galaxy-c7-2017',16,'samsung galaxy c7',3,5,5,12,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,999),
    ]),
    new Brand('Apple',[
      new Phone('apple-iphone-x',8,'iphone 10',2,6,5,8,'iOS 11.1','Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',3000,1000),
      new Phone('apple-iphone-7-plus-r2',32,'iphone 7',1,5,5,12,'iOS 11.1','Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',2800,999),
    ]),
    new Brand('HTC',[
      new Phone('htc-u-ultra',32,'htc-u-ultra',1,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,883),
      new Phone('htc-desire-10-pro',16,'htc-desire-10-pro',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,900),
    ]),
    new Brand('Asus',[
      new Phone('asus-zenfone-v-v520kl',32,'asus-zenfone-v-v520kl',1,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,650),
      new Phone('asus-zenfone-4-selfie-pro-zd552kl',8,'asus-zenfone-4-selfie-pro-zd552kl',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,700),
    ]),
    new Brand('Nokia',[
      new Phone('nokia-8-',32,'nokia-8',3,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,650),
      new Phone('nokia-7-',8,'nokia-7',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,800),
    ]),
    new Brand('Huawei',[
      new Phone('huawei-mate10-pro',8,'huawei-mate10-pro',1,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,700),
      new Phone('huawei-enjoy-7-plus-new',32,'huawei-enjoy-7-plus',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,699),
    ]),
    new Brand('LG',[
      new Phone('lg-v30-',32,'lg-v30',3,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,555),
      new Phone('lg-stylus-3-',16,'lg-stylus-3',2,5,5,12,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,870),
    ]),
    new Brand('Motorola',[
      new Phone('motorola-moto-g5s',32,'motorola-moto-g5s',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,480),
      new Phone('motorola-moto-e4-plus',8,'motorola-moto-e4-plus',3,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,690),
    ]),
    new Brand('Lenovo',[
      new Phone('lenovo-k8-plus',32,'lenovo-k8-plus',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,600),
      new Phone('lenovo-a6600',8,'lenovo-a6600',1,5,5,12,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,550),
    ]),
    new Brand('Microsoft',[
      new Phone('microsoft-lumia-950-xl--',32,'microsoft-lumia-950-xl',3,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,800),
      new Phone('microsoft-lumia-650-s',16,'microsoft-lumia-650-s',3,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,700),
    ]),
    new Brand('Oppo',[
      new Phone('oppo-r11s-r',32,'oppo-r11s-r',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,450),
      new Phone('oppo-f5-new',16,'oppo-f5-new',2,5,5,12,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,400),
   ]),
   new Brand('OnePlus',[
     new Phone('oneplus-5',32,'oneplus-5',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,550),
    new Phone('oneplus-3-',8,'oneplus-3',1,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,489),
 ]),
 new Brand('ZTE',[
   new Phone('zte-nubia-z17s',32,'zte-nubia-z17s',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,400),
  new Phone('zte-blade-a601',8,'zte-blade-a601',2,5,5,12,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,360),
]),
new Brand('Acer',[
  new Phone('acer-liquid-x2-1',8,'acer-liquid-x2-1',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,500),
  new Phone('acer-liquid-jade-2',32,'acer-liquid-jade-2',1,5,5,12,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2600,400),
]),
new Brand('Xiomi',[
  new Phone('xiaomi-redmi-note-5a',32,'xiaomi-redmi-note-5a',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,300),
  new Phone('xiaomi-mi-note3-',32,'xiaomi-mi-note3',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,330),
]),
new Brand('Sony',[
  new Phone('sony-xperia-xa1-2017',8,'sony-xperia-xa1-2017',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,500),
  new Phone('sony-xperia-xa--',32,'sony-xperia-xa',1,5,5,12,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,400),
]),
new Brand('Symphony',[
  new Phone('plum-might-plus-ii',32,'plum-might-plus-ii',2,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2800,300),
  new Phone('plum-axe-lte',16,'plum-axe-lte',3,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,200),
]),
new Brand('Vodaphone',[
  new Phone('vodafone-smart-speed-6',32,'vodafone-smart-speed-6',3,5,5,8,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',3000,240),
  new Phone('vodafone-smart-e8',16,'vodafone-smart-e8',2,5,5,12,'Android 7.0 (Nougat)','Quad-core 1.3 GHz Cortex-A7',2600,290),
]),
  ];
  compare=[];
  

  constructor() {this.new=false;
    this.edit=false;
  }

  setBrands(brands:Brand[]){
    this.brands=brands;
    this.phonesChanged.next(this.brands.slice());
}  
  getBrands(){
    return this.brands.slice();
  }
  getBrand(index:number){
    this.bid=index;
    // console.log(this.brands[index]);
    // console.log(this.brands);
    
    
    return this.brands[index];
    
  }
  getPhone(index:number,bid:number){
    //this.brand=this.brands[bid];
    return this.brands[bid].phones[index];
  }
  addBrand(brand:Brand){
    this.brands.push(brand);
    this.phonesChanged.next(this.brands.slice());
}
  updateBrand(index:number,bid:number,newBrand:any){
    //console.log(newBrand);
    //this.brand=this.brands[bid];
    this.brands[bid]=newBrand;
    // console.log(this.brand.phones[index]=newBrand);
    
    //console.log(this.brands);
    //console.log(bid,index);
    
    this.phonesChanged.next(this.brands.slice());
}
// updateLike(index:number,bid:number,newLike:any){
//   console.log(newLike);
//   //this.brand=this.brands[bid];
//   this.brands[bid].phones[index].like=newLike;
//   this.phonesChanged.next(this.brands.slice());
// }
// updateDislike(index:number,bid:number,newDislike:any){
//   console.log(newDislike);
//   //this.brand=this.brands[bid];
//   this.brands[bid].phones[index].dislike=newDislike;
//   this.phonesChanged.next(this.brands.slice());
// }
  


}
