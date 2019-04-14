import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { 
    
  }
  public fetchGithubUserDetails()
  {
    const serchText='ab';
    return this.http.get('https://api.github.com/search/users?q='+serchText)

  }
}
