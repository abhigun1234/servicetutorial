import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public productDetails=[]
  
  constructor(private  productService : ProductService,private router :Router) { }

  ngOnInit() {
  }
  public getProductList()
  {
    this.productDetails
    =this.productService.getProductDetails()

 }
 onSelect(product)
 {

  this.router.navigate(['/products',product.id])
 }



}
