import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { News } from '../models/news.model';

@Injectable()
export class NewsService {
  newsChanged=new Subject<News[]>();
  private news:News[] =[
    new News('samsung-galaxy-c7-2017','Here are Samsung’s C7 Black Friday and Cyber Monday deals starting November 23','Samsung Galaxy Tab E is an affordable tablet that can be found mostly on carriers websites. The 8 version costs $249.99 on Verizon, but Big Red launched a new deal, where you can get it for $100 less.','The Galaxy Tab E can be purchased with one of three options. There is a $0 down payment and $10.41 every month for the next two years ($249.84 in total). If you want to stay on the Verizon network but don’t want to bother with the monthly plan hassle, you can buy it straight away for $149.99.The model number of this Galaxy Tab E version is T378. It supports both Wi-Fi and LTE connections, but unlike the regular T377 model that comes with Android Lollipop out of the box, this one runs Android Nougat 7.1. Other specs include 1280x800px TFT screen, 5 MP main camera, 32 GB storage and 1.5 GB RAM. The battery is 5,000 mAh, and Verizon says it can last for up to 24 hours of usage.'),

    new News('samsung-galaxy-s6-edge-plus','Next-gen Samsung Galaxy S6 and Galaxy S7 get Wi-Fi certification','Wi-Fi Alliance just granted the required certification to two Samsung phones. The products have model names SM-A530F and SM-A730F, meaning these are the Samsung Galaxy A5 (2018) and the Samsung Galaxy A7 (2018).','According to the documents provided, both phones will run the Android 7.1.1 Nougat. Although it would be better if they came with Oreo out of the box, Samsung tends to launch its A series smartphones on older OS versions and update them subsequently. Back in the beginning of 2017, Galaxy A3, Galaxy A5 and Galaxy A7 all came with Marshmallow, but eventually got the upgrade to Nougat.The Wi-Fi certification reveals the Galaxy A5 (2018) and the Galaxy A7 (2018) are certified for Wi-Fi 802.11 a/b/g/ac.The new Galaxy A5 and Galaxy A7 might come with dual-camera setup on the front while the fingerprint goes on the back. This is most likely to happen if the phones arrive with Infinity Display, as previous rumors suggested.'),

    new News('apple-iphone-7-plus-r2','Apple iPhone 7 sells out in minutes in South Korea','South Korea`s biggest carrier - SK Telecom - has confirmed that it has exhausted all of its iPhone X pre-order stock in 3 minutes - in contrast, the initial iPhone 7 stock took 20 minutes a year ago.','SK Telecom has said to Korea`s Yonhap News Agency that it had less than half as many iPhone X units as it had iPhone 8 ones and that the silver iPhone X took about 1 minute to sell out in pre-orders.Industry analysts estimate that around 150,000 iPhone X units were allocated to South Korea.According to analysts the iPhone 8 series had around 60-70% of the interest of the iPhone 7 series - probably due to the iPhones arrival to market.It seems interest in the iPhone X is strong in South Korea, despite the smartphone carrying a big price premium compared to its Stateside price - Korean buyers are charged around $1,237 for the base 64GB model, compared to the $999 US price.'),

    new News('apple-iphone-x','Deal: Apple iPhone 8 for GBP 560','Apple announced the iPhone 8 in September. People lined in front of Apple Stores to be among the first to shed £699, while some played the waiting game and won','The discount applies to all Apple products costing £159 or more. And if you think that deal is sweet, check this out - the products can be purchased with the Buy Now Pay Later program. This means any gadget or device (excluding iPhone X) can be paid in the following 12 months without any interest.The discounted 20% will be credited to the buyer’s account in a few weeks, meaning you pay £699 for the phone, and can then use the refund for other Very products.'),

    new News('htc-desire-10-pro','HTC Desire 10 Pro Explosion That Burnt a Womans Hand Is Being Investigated by the Company ','When one hears of a smartphone exploding, the first thought that occurs to us is of Samsungs Galaxy Note 7 - a fact thats telling of just how much the product recall and its aftermath pervaded both daily life and popular culture.','Making the claim in a Facebook photo earlier this week showing a bandaged hand, Nidhi Kapoor said her HTC 10 exploded on June 21. She added that the smartphone was not on call or charging when it exploded.Gadgets 360 contacted HTC for comment, and were provided the following statement, "HTC is aware of the customers report and we are working to investigate as quickly as possible. As always, our customers safety is a top priority."The Taiwanese smartphone maker also clarified that the smartphone in question was in fact an HTC Desire 10 Pro - not an HTC 10 as Kapoor wrote - and that the incident occurred outside of India.'),

    new News('htc-u-ultra','HTC U Ultra $150 discount codes are being sent to Team HTC members','The HTC U Ultra only launched a few weeks ago in the US, but it looks like the company is trying to get its most loyal fans to purchase its current flagship device.','Online reports from Reddit claim that members of the Team HTC program are being sent promo codes that cut the price of the U Ultra down by $150 when the phone is purchased on the company’s website.In case you are not familiar with Team HTC, it lets members earn perks if they promote the company on their social media accounts, or if they actually buy HTC devices, or even it they get a friend to buy one. In this case, the $150 discount code, if applied to the HTC U Ultra, would cut down the price of the phone from $749 to $599.'),

    new News('asus-zenfone-4-selfie-pro-zd552kl','Asus certainly made the most of the ZenFone 3 range in 2016 and even early 2017, launching a wide variety of spinoff devices including the ZenFone 3 Deluxe, ZenFone 3 Laser, and most recently, the ZenFone 3 Zoom.','We knew we were getting a range of ZenFone 4 devices, but not when they would arrive, how powerful they would be, or what they would look like.','Asus revealed images of the ZenFone 4 on its French site, alongside full details about the device. But based on the launch, the ZenFone 4 features a 5.5-inch AMOLED display, Qualcomm Snapdragon 660/630 processor, 6GB of RAM, 64GB of internal storage, and a pair of cameras at the rear rated at 12 and 8 megapixels. The front-facing camera is eight megapixels as well, the battery capacity is 3,300mAh, and the phone should be available in both black and white'),

    new News('asus-zenfone-v-v520kl','Asus unveils Verizon-exclusive Asus ZenFone V Live smartphone','Asus announced the immediate availability of the Verizon-exclusive Asus ZenFone V Live for USD 7 a month for 24 months on the Verizon device payment plan (USD 168 retail, 0 percent APR). The Asus ZenFone V Live offers premium features such as a full-metal body, curved 2.5D glass and a fast and accurate fingerprint reader. It features built-in livestream beautification options for Facebook, Instagram and YouTube.','Asus announced the immediate availability of the Verizon-exclusive Asus ZenFone V Live for USD 7 a month for 24 months on the Verizon device payment plan (USD 168 retail, 0 percent APR). The Asus ZenFone V Live offers premium features such as a full-metal body, curved 2.5D glass and a fast and accurate fingerprint reader. It features built-in livestream beautification options for Facebook, Instagram and YouTube.'),

    new News('nokia-7-','Nokia 7 News - Release Date, UK price and specifications','Nokia is gradually filling in the gaps in its Android phone line-up, and the Nokia 7 is now official. Read the latest news on the Nokia 7 specifications, price and UK launch date.','When is the Nokia 7 release date?Announced in China on 19 October 2017, the Nokia 7 will go on sale there on 24 October.It will almost certainly launch worldwide like the others in the line-up, but this has not yet been confirmed by HMD Global. How much will the Nokia 7 cost in the UK?In China the 64GB Nokia 7 costs 2,499 yuan. Thats around £286.The 128GB model costs 2,699 yuan, or around £309.In China the Nokia 7 can be pre-ordered via '),

    new News('nokia-8-','Here’s why I think Nokia 8 is the top choice for a mid-range flagship smartphone','When HMD Global announced its first lineup of Nokia smartphones at the Mobile World Congress earlier this year, the budget devices – Nokia 3, Nokia 5, and Nokia 6 – were underwhelming. Some of them were fine devices, but they were only a timid representation of what the Nokia brand was.','The Nokia 8 doesn’t attempt to dazzle you with any design shenanigans. Instead, it goes for a safe, minimalist design – some may even call it boring. The design aesthetics of the Nokia 8 are divisive, but I’m in the camp that really likes the clean, refined look. It has a definite Scandinavian, or maybe that’s just our Nokia hangover, feel to it.'),

    new News('huawei-enjoy-7-plus-new','Huawei Enjoy 7 Plus With Fingerprint Scanner, Android 7.0 Nougat Launched  ','The Huawei Enjoy 7 Plus got a refresh today. If this phone rings a bell to you, it should: Huawei already released this phone, in fact less than two weeks ago.','Are you confused? Let me explain. On April 10th, Huawei came out with their new phone, the Enjoy 7 Plus. Specs included a large 5.5-inch 720p display with the Snapdragon 435 SoC paired with 3 GB of RAM and 32 GB of on-board storage. Then today, April 22nd, we have a new Enjoy 7 Plus. This time with exactly the same specs except 4 GB of RAM and 64 GB of storage instead. It seems someone may have forgotten to mention you get storage options with this phone!Both phones have the same 12 MP rear facing camera and 8 MP front-facing shooter. Just below the rear camera is Huawei’s famous fingerprint sensor, claiming to be able to unlock your phone in 0.2 seconds. That’s not the only impressive thing about this phone, though: the battery capacity is 4,000 mAh, promising 20 hours of video playback. So if you are looking for a new phone to binge-watch the new season of Better Call Saul, this could be your phone!'),

  ];

  constructor() { }
  setNews(news:News[]){
    this.news=news;
    this.newsChanged.next(this.news.slice());
}  
  getNews(){
    return this.news.slice();
  }
  getNew(index:number){
    return this.news[index];
}
addNews(news:News){
  this.news.unshift(news);
  this.newsChanged.next(this.news.slice());
}
updateNews(index:number,newNews:News){
  this.news[index]=newNews;
  this.newsChanged.next(this.news.slice());
}
deleteNews(index:number){
  this.news.splice(index,1);
  this.newsChanged.next(this.news.slice());
}

}
