import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http:HttpClient) { }

   ProductsUrl="http://localhost:3000/Products"
   CategoriesUrl="http://localhost:3000/Categiries"
   CategorytsUrl="http://localhost:3000/Products?Categoryid"

  GetAllProducts()
  {
     return this.http.get(this.ProductsUrl)
  }
  GetAllCategories()
  {
     return this.http.get(this.CategoriesUrl)
  }

  GetAllProductsByCatId(Categoryid:any)
  {
    //return this.http.get(this.CategorytsUrl)
    return this.http.get(`${this.CategorytsUrl}=${Categoryid}`)
  }

  GetProductById(ProductId:any)
  {
    return this.http.get(`${this.ProductsUrl}/${ProductId}`)
  }



}
