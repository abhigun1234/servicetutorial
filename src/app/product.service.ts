import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetails=[{"id":"1",name:"addidas","price":"2345"},
  {"id":"2",name:"nike","price":"2345"},
  {"id":"3",name:"nike","price":"2345"}]
  constructor() { }

  getProductDetails()
  {


    return  this.productDetails 
  }
}
