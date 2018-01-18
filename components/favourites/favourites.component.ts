import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../../services/favourite.service';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand.model';
import { Favourite } from '../../models/favourite.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  brands:Brand[];
  favourite1:Favourite[];
  userID:any;

  constructor(private favouriteService:FavouriteService,private brandService:BrandService) { }

  ngOnInit() {
    this.brands=this.brandService.getBrands();
    this.favourite1=this.favouriteService.getFavourite();
    this.userID=localStorage.getItem('user');
  }
  bid(bid:number){
    this.brandService.bid=bid;
    console.log('bid',this.bid);
  }

}
