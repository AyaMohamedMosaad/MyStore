import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCardServicesService {

  constructor(private http:HttpClient) { }

CardURL="http://localhost:3000/cart/"

//CardProducts:any


getAllCardProducts()
{
  if("card" in localStorage)
  {
    return JSON.parse(localStorage.getItem("card")!)
  }

}




deleteProductFromCart(index:any)
{
  let CardProducts =this.getAllCardProducts()
  CardProducts.splice(index,1)
  localStorage.setItem("card",JSON.stringify(CardProducts))
 
}



clearShoppingCart()
{
  let CardProducts =this.getAllCardProducts()
  CardProducts.splice(0)
  localStorage.setItem("card",JSON.stringify(CardProducts))

}








CreateNewCart(Model:any)
{
return this.http.post(this.CardURL,Model)
}


GetAllCarts()
{
  return this.http.get(this.CardURL)
}


}
