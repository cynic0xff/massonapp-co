import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //express server
  url = 'http://localhost:4000/profile';

  constructor(private http: HttpClient) { }

  saveProfile(data) {

    console.log(data);
    
    //TODO: Think about endpoints
    this.http.post(`${this.url}/add`, data)
    .subscribe( res => console.log('Saved profile successfully'));
  }

  getProfiles() {
    return this.http.get(`${this.url}`);
  }
}
