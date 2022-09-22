import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/Services/ProductServices/product-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }


CardProducts:any=[]
length:any
  ngOnInit(): void {
    this.getDataFromLocalDtorage()
  }

  getDataFromLocalDtorage()
  {
    if("card" in localStorage)
    {
      this.CardProducts=JSON.parse(localStorage.getItem("card")!)
    }
     this.length = this.CardProducts.length
     return  this.length
  }


}
