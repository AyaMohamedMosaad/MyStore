import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';

import { ProductServicesService } from 'src/app/Services/product-services.service';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCardComponent implements OnInit {

  constructor(private ProductServices:ProductServicesService) { }
  AllItems:any
  count:any

  fullname:any
  ngOnInit(): void {
    this.getAllCardProducts()

}
registerForm=new FormGroup({
  fullname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z]{3,}")]),
  address:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("[A-Za-z]{6,}")]),
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
  if("card" in localStorage)
  {
    this.CardProducts=JSON.parse(localStorage.getItem("card")!)
  }
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

  // console.log(this.CardProducts[index])
  this.CardProducts.splice(index,1)
  this.CalcTotalPrice()

  localStorage.setItem("card",JSON.stringify(this.CardProducts))
}

clearShoppingCart()
{
   this.CardProducts.splice(0)
   localStorage.setItem("card",JSON.stringify(this.CardProducts))
  this.CalcTotalPrice()

}


notSuccess:boolean=false
success:boolean=true
SendCardToBackEng()
{
  if(this.CardProducts.length =0)
  {
    this.notSuccess=true

  }

}





}
