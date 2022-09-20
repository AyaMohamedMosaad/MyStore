import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/Services/ProductServices/product-services.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
AllProducts:any
AllCategories:any
selectedCatID:any
Loading:boolean=false
AllID:any
  constructor(private productervices:ProductServicesService) { }

  ngOnInit(): void {

     this.getAllCategories()
      this.getAll()

  }




getAllCategories()
{
  this.productervices.GetAllCategories().subscribe(
    (data) => {this.AllCategories = data},
    (error)=> {alert(error)}
    )

}


  getAll()
  {

  this.Loading=true
    return this.productervices.GetAllProducts().subscribe(
      (data) => {this.AllProducts = data
                 this.Loading=false     },
      (error)=> {alert(error)
        this.Loading=true }
      )
      ;
  }
  getCategoryById(id:any)
  {


    if(id==0)
    { this.Loading=true
      return this.productervices.GetAllProducts().subscribe(
        (data) => {this.AllProducts = data
          this.Loading=false},
        (error)=> {alert(error)
          this.Loading=true}
        )
        ;
    }
    else{
      this.Loading=true
    return this.productervices.GetAllProductsByCatId(id).subscribe(

      (data) => {this.AllProducts = data
        this.Loading=false}
      ,
      (error)=> {alert(error)
        this.Loading=true}
      )
      ;
    }
  }







CardProducts:any=[]
  addToCard(event:any)
  {
      if("card" in localStorage)
      {
         this.CardProducts=JSON.parse(localStorage.getItem("card")!)

          let found=this.CardProducts.find( (item: { id: any; item:any }) => item.item.id==event.item.id)
           if(found)
           {
            alert("this Product already in Card ")
           }
           else{

             this.CardProducts.push(event)
             localStorage.setItem("card",JSON.stringify(this.CardProducts))
           }
      }
      else{
        this.CardProducts.push(event)
        localStorage.setItem("card",JSON.stringify(this.CardProducts))
      }
      console.log(event)
  }





}
