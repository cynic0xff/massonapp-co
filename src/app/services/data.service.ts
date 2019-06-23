import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  saveProfile(first_name, middle_name, last_name) {
    
    //create an object with the vars passed in
    const obj = {
      first_name,
      middle_name,
      last_name
    };

    this.http.post(`${this.url}/add`, obj)
    .subscribe( res => console.log('Saved profile successfully'));
  }

  getProfiles() {
    return this.http.get(`${this.url}`);
  }
}
