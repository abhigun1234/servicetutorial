import { Component, OnInit } from '@angular/core';
import {GreetingsService} from '..//greetings.service'
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  id=''
  content=''

  constructor(public greet : GreetingsService) { }

  ngOnInit() {
  }
 public greeting()
 {
    this.greet.greetings().subscribe(res=>{
      alert("hello")
        console.log(res)
        // this.id=res.id
        // this.content=res.content
    })
    
 }

 
}
