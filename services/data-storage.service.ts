import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { BrandService } from "./brand.service";
import { Brand } from "../models/brand.model";
import { AuthService } from "../auth/auth.service";
import { ReviewService } from "./review.service";
import { Review } from "../models/review.model";
import { NewsService } from "./news.service";
import { News } from "../models/news.model";
import { EmailService } from "./email.service";
import { RatingService } from "./rating.service";
import { Rating } from "../models/rating.model";
import { SratingService } from "./srating.service";
import { Srating } from "../models/srating.model";
import { UreviewService } from "./ureview.service";
import { Ureview } from "../models/ureview.model";
import { FavouriteService } from "./favourite.service";
import { Favourite } from "../models/favourite.model";
import { Email } from "../models/email.model";
import { Email2Service } from "./email2.service";
import { Email2 } from "../models/email2.model";


@Injectable()
export class DataStorageService{
constructor(private http:Http,private brandService:BrandService,private reviewService:ReviewService,private newsService:NewsService,private authService:AuthService,private emailService:EmailService,private email2Service:Email2Service,private ratingService:RatingService,private sratingService:SratingService,private ureviewService:UreviewService,private favouriteService:FavouriteService){}

storeBrands(){
    const token=this.authService.getToken()
    return this.http.put('https://phoneinfo-adfa8.firebaseio.com//brands.json?auth=' + token,this.brandService.getBrands());
}
storeReviews(){
  const token=this.authService.getToken()
  return this.http.put('https://phoneinfo-adfa8.firebaseio.com//reviews.json?auth=' + token,this.reviewService.getReviews());
}
storeNews(){
  const token=this.authService.getToken()
  return this.http.put('https://phoneinfo-adfa8.firebaseio.com//news.json?auth=' + token,this.newsService.getNews());
}
storeRating(){
  const token=this.authService.getToken()
  return this.http.put('https://phoneinfo-adfa8.firebaseio.com//rating.json?auth=' + token,this.ratingService.getRating());
}
storeSrating(){
  const token=this.authService.getToken()
  return this.http.put('https://phoneinfo-adfa8.firebaseio.com//srating.json?auth=' + token,this.sratingService.getSrating());
}
storeUreview(){
  const token=this.authService.getToken()
  return this.http.put('https://phoneinfo-adfa8.firebaseio.com//ureview.json?auth=' + token,this.ureviewService.getUreviews());
}
storeFavourite(){
  const token=this.authService.getToken()
  return this.http.put('https://phoneinfo-adfa8.firebaseio.com//favourite.json?auth=' + token,this.favouriteService.getFavourite());
}
storeEmail(){
  const token=this.authService.getToken()
  return this.http.put('https://phoneinfo-adfa8.firebaseio.com//email.json',this.emailService.getEmail());
}
storeEmail2(){
  const token=this.authService.getToken()
  return this.http.put('https://phoneinfo-adfa8.firebaseio.com//email2.json',this.email2Service.getEmail());
}

getBrands(){
    const token=this.authService.getToken()
    this.http.get('https://phoneinfo-adfa8.firebaseio.com//brands.json')
    .map(
        (response: Response) => {
          const brands: Brand[] = response.json();
          for (let brand of brands) {
            if (!brand['phones']) {
              brand['phones'] = [];
            }
          }
          return brands;
        }
      )

    .subscribe(
        (brands:Brand[]) => {
           this.brandService.setBrands(brands);
        }
    );
}
getReviews(){
  const token=this.authService.getToken()
  this.http.get('https://phoneinfo-adfa8.firebaseio.com//reviews.json')
  .map(
      (response: Response) => {
        const reviews: Review[] = response.json();
        
        return reviews;
      }
    )

  .subscribe(
      (reviews:Review[]) => {
         this.reviewService.setReviews(reviews);
      }
  );
}
getNews(){
  const token=this.authService.getToken()
  this.http.get('https://phoneinfo-adfa8.firebaseio.com//news.json')
  .map(
      (response: Response) => {
        const news: News[] = response.json();
        
        return news;
      }
    )

  .subscribe(
      (news:News[]) => {
         this.newsService.setNews(news);
      }
  );
}
getRating(){
  const token=this.authService.getToken()
  this.http.get('https://phoneinfo-adfa8.firebaseio.com//rating.json')
  .map(
      (response: Response) => {
        const rating: Rating[] = response.json();
        
        return rating;
      }
    )

  .subscribe(
      (rating:Rating[]) => {
         this.ratingService.setRating(rating);
      }
  );
}
getSrating(){
  const token=this.authService.getToken()
  this.http.get('https://phoneinfo-adfa8.firebaseio.com//srating.json')
  .map(
      (response: Response) => {
        const srating: Srating[] = response.json();
        
        return srating;
      }
    )

  .subscribe(
      (srating:Srating[]) => {
         this.sratingService.setSrating(srating);
      }
  );
}
getUreview(){
  const token=this.authService.getToken()
  this.http.get('https://phoneinfo-adfa8.firebaseio.com//ureview.json')
  .map(
      (response: Response) => {
        const ureview: Ureview[] = response.json();
        
        return ureview;
      }
    )

  .subscribe(
      (ureview:Ureview[]) => {
         this.ureviewService.setUreview(ureview);
      }
  );
}
getFavourite(){
  const token=this.authService.getToken()
  this.http.get('https://phoneinfo-adfa8.firebaseio.com//favourite.json')
  .map(
      (response: Response) => {
        const favourite: Favourite[] = response.json();
        
        return favourite;
      }
    )

  .subscribe(
      (favourite:Favourite[]) => {
         this.favouriteService.setFavourite(favourite);
      }
  );
}

getEmail2(){
  const token=this.authService.getToken()
  this.http.get('https://phoneinfo-adfa8.firebaseio.com//email2.json')
  .map(
      (response: Response) => {
        const email2: Email2[] = response.json();
        
        return email2;
      }
    )

  .subscribe(
      (email2:Email2[]) => {
         this.email2Service.setEmail(email2);
      }
  );
}
}