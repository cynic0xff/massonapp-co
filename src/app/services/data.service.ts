import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //express server
  url = 'http://localhost:4000';

  constructor(private http: HttpClient, private router: Router) { }

  saveProfile(data) {

    console.log(data);
    
    //get the endpoint based on the current url
    //this.url = this.router.url;
    console.log(`Current url from router: ${this.router.url}`);

    this.http.post(`${this.url}${this.router.url}/add`, data)
    .subscribe( res => console.log('Saved profile successfully'));
  }

  getProfiles() {
    return this.http.get(`${this.url}`);
  }

  saveLodgeProfile(data) {
    
    //get the endpoint based on the current url
    //this.url = this.router.url;
    console.log(`Current url from router: ${this.router.url}`);

    this.http.post(`${this.url}${this.router.url}/add`, data)
    .subscribe( res => console.log('Saved profile successfully'));
  }
}
