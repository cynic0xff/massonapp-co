import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //express server
  url = 'http://localhost:4000/profile';

  constructor(private http: HttpClient) { }

  saveProfile(first_name) {
    
    //create an object with the vars passed in
    const obj = {
      first_name
    };

    this.http.post(`${this.url}/add`, obj)
    .subscribe( res => console.log('Saved profile successfully'));
  }

  getProfiles() {
    return this.http.get(`${this.url}`);
  }
}
