import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from 'src/app/Services/ProductServices/product-services.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  ProductId:any
  product:any
addButton:boolean=true
amount:any=1
  constructor(private activated:ActivatedRoute,private productservices:ProductServicesService) {
    this.ProductId=activated.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.productservices.GetProductById(this.ProductId).subscribe(
       (data)=>{this.product=data},
       (error)=>{console.log(error)}
    )
  }



ProductCard:any=[]
event:any


  add()
  {
      if("card" in localStorage)
      {
         this.ProductCard=JSON.parse(localStorage.getItem("card")!)
         this.event={item:this.product,quantity:this.amount}
          let found=this.ProductCard.find( (item: { id: any; item:any }) => item.item.id==this.event.item.id)
           if(found)
           {
            alert("this Product already in Card ")
           }
           else{

             this.ProductCard.push(this.event)
             localStorage.setItem("card",JSON.stringify(this.ProductCard))
             alert("this Product Successfuly Added To Your Cart")

           }
      }
      else{
        this.ProductCard.push(this.event)
        localStorage.setItem("card",JSON.stringify(this.ProductCard))
        alert("this Product Successfuly Added To Your Cart")
      }
      console.log(this.event)
  }






}
