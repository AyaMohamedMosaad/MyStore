import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { AddToCardServicesService } from 'src/app/Services/AddToCardServices/add-to-card-services.service';

import { ProductServicesService } from 'src/app/Services/ProductServices/product-services.service';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCardComponent implements OnInit {

  constructor(private http:AddToCardServicesService) { }
  AllItems:any
  count:any

  fullname:any
  ngOnInit(): void {
    this.getAllCardProducts()

}
registerForm=new FormGroup({
  fullname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z ]{3,}$")]),
  address:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("^[a-zA-Z ]{6,}$")]),
  creditcardnumber:new FormControl("",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{16}$")]),

});

registerSubmited()
{

}

get FullName():FormControl
{return this.registerForm.get("fullname") as FormControl}

get Address():FormControl
{return this.registerForm.get("address") as FormControl}

get CreditCardNumber():FormControl
{return this.registerForm.get("creditcardnumber") as FormControl}



// Card
CardProducts:any
getAllCardProducts()
{

 this.CardProducts =this.http.getAllCardProducts()
  this.CalcTotalPrice()


}


CardTotalPrice:any

CalcTotalPrice()
{

  this.CardTotalPrice=0;
  for(let Item in this.CardProducts)
  {
    this.CardTotalPrice+=this.CardProducts[Item].item.price * this.CardProducts[Item].quantity
  }

return this.CardTotalPrice
}

DetectChange()
{

  localStorage.setItem("card",JSON.stringify(this.CardProducts))
  this.CalcTotalPrice()

}


inc(index:any)
{
  this.CardProducts[index].quantity++
  localStorage.setItem("card",JSON.stringify(this.CardProducts))
  this.CalcTotalPrice()

}


dec(index:any)
{
  if(this.CardProducts[index].quantity>1)
  {
    this.CardProducts[index].quantity--
    localStorage.setItem("card",JSON.stringify(this.CardProducts))
    this.CalcTotalPrice()
  }
  else{
    this.CardProducts[index].quantity=1
    this.CalcTotalPrice()

  }

}

//Delete and Clear
deleteProduct(index:any)
{
 this.http.deleteProductFromCart(index)
 this.getAllCardProducts()
 this.CalcTotalPrice()
}

clearShoppingCart()
{
  this.http.clearShoppingCart()
  this.getAllCardProducts()
  this.CalcTotalPrice()

}









}
