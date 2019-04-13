import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public productDetails=[]
  constructor(private  productService : ProductService) { }

  ngOnInit() {
  }
  public getProductList()
  {
 this.productDetails
  =this.productService.getProductDetails()

 }

}
