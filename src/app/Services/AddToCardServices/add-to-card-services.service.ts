import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCardServicesService {

  constructor(private http:HttpClient) { }

CardURL="http://localhost:3000/cart/"
CreateNewCart(Model:any)
{
return this.http.post(this.CardURL,Model)
}


GetAllCarts()
{
  return this.http.get(this.CardURL)
}


}
