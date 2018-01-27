import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllbrandsComponent } from './components/allbrands/allbrands.component';
import { LatestDeviceComponent } from './components/latest-device/latest-device.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { NewsComponent } from './components/news/news.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { FullReviewComponent } from './components/full-review/full-review.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { ReviewService } from './services/review.service';
import { SelectedBrandComponent } from './components/selected-brand/selected-brand.component';
import { BrandService } from './services/brand.service';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { AddComponent } from './components/add/add.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './services/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { FindphonesComponent } from './components/findphones/findphones.component';
import { FilterPipe } from './filter.pipe';
import { CompareComponent } from './components/compare/compare.component';
import { NewsService } from './services/news.service';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { NgStickyDirective } from 'ng-sticky';
import { NfilterPipe } from './nfilter.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { EmailService } from './services/email.service';
import { CfilterPipe } from './cfilter.pipe';
import { RatingService } from './services/rating.service';
import { SratingService } from './services/srating.service';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ReviewByUserComponent } from './components/review-by-user/review-by-user.component';
import { UreviewService } from './services/ureview.service';
import { LoadingModule } from 'ngx-loading';
import { FavouritesComponent } from './components/favourites/favourites.component'; // import Loading
import { FavouriteService } from './services/favourite.service';
import { EqualValidator } from './services/equal-validator.directive';
import { ReversePipe } from './reverse.pipe';
import { Email2Service } from './services/email2.service';

const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'add',component:AddComponent },
  {path:'nav',component: NavbarComponent},
  {path:'email',component: ReviewsComponent},
  {path:'findphones',component:FindphonesComponent},
  {path:'newRev',component:AddReviewComponent, canActivate:[AuthGuard]},
  {path:'newNews',component:AddNewsComponent, canActivate:[AuthGuard]},
  {path:'reviews',component:MainBodyComponent },
  {path:'news',component:NewsComponent },
  {path:'compare',component:CompareComponent },
  {path:'contact',component:ContactComponent },
  {path:'chart',component:ChartComponent },
  {path:'favourite',component:FavouritesComponent },
  {path:'detail/:id',component:ReviewDetailsComponent },
  {path:'detail/:id/edit',component:AddReviewComponent, canActivate:[AuthGuard] },
  {path:'newsdetail/:id',component:NewsDetailsComponent },
  {path:'newsdetail/:id/edit',component:AddNewsComponent, canActivate:[AuthGuard] },
  {path:'slbrand/:id',component:SelectedBrandComponent },
  {path:'slbrand/:id/new',component:AddComponent, canActivate:[AuthGuard] },
  {path:'pdetail/:id',component:PhoneDetailComponent },
  {path:'pdetail/:id/edit', component:AddComponent,canActivate:[AuthGuard]},
  {path:'new', component:AddComponent, canActivate:[AuthGuard]},
  {path:'toprating', component:ReviewDetailComponent},
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AllbrandsComponent,
    LatestDeviceComponent,
    MainBodyComponent,
    NewsComponent,
    ReviewsComponent,
    LeftsidebarComponent,
    FullReviewComponent,
    ReviewDetailComponent,
    ReviewDetailsComponent,
    SelectedBrandComponent,
    PhoneDetailComponent,
    AddComponent,
    AddReviewComponent,
    SignupComponent,
    SigninComponent,
    FindphonesComponent,
    FilterPipe,
    CompareComponent,
    NewsDetailsComponent,
    AddNewsComponent,
    NgStickyDirective,
    NfilterPipe,
    ContactComponent,
    CfilterPipe,
    ChartComponent,
    ReviewByUserComponent,
    FavouritesComponent,
    EqualValidator,
    ReversePipe,
  
  ],
  imports: [
    BrowserModule,
   
    ReactiveFormsModule,
    FlashMessagesModule,
    HttpModule,
    FormsModule,
    LoadingModule,
  
    ChartsModule,
    RouterModule.forRoot(appRoutes),
  ],

  providers: [
    ReviewService,SratingService,UreviewService,RatingService,FavouriteService,NewsService,EmailService,Email2Service,BrandService,DataStorageService,AuthService,AuthGuard,

   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
