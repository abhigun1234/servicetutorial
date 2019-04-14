import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
  

}
)
export class ProductdetailsComponent implements OnInit {
  productDetails=[]
  constructor(public productService : ProductService,private activateRoute :ActivatedRoute) {

 
   }

  ngOnInit() {
    
    
    //alert(name)
  }
n
  getProductDetails()
  { alert("hi")
    let id=this.activateRoute.snapshot.paramMap.get('id')
    alert(id)
    //this.productDetails=this.productService.getProductDetails()
  }

}
