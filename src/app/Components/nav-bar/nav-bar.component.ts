import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/Services/product-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private myServices:ProductServicesService) { }
AllCategories:any
selectedCatID:any

CardProducts:any=[]

  ngOnInit(): void {
    this.getDataFromLocalDtorage()
  }

  getDataFromLocalDtorage()
  {
    if("card" in localStorage)
    {
      this.CardProducts=JSON.parse(localStorage.getItem("card")!)
    }

  }


}
