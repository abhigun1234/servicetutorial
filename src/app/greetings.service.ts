import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  constructor(private httpClient :HttpClient) { }

  public greetings()
  {

    return this.httpClient.get('http://rest-service.guides.spring.io/greeting')
  }
}
