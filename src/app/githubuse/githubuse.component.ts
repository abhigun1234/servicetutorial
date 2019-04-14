import { Component, OnInit } from '@angular/core';
import {GithubService} from '..//github.service'
@Component({
  selector: 'app-githubuse',
  templateUrl: './githubuse.component.html',
  styleUrls: ['./githubuse.component.css']
})
export class GithubuseComponent implements OnInit {

  constructor(private github:GithubService) { }

  ngOnInit() {
  }

  public fetchGithubUser()
  {

    this.github.fetchGithubUserDetails().subscribe(res=>{
      alert("hello")
        console.log(res)
        // this.id=res.id
        // this.content=res.content
    })
  }

}
