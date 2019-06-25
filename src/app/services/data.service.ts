import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //express server
  url = 'http://localhost:4000/profile';

  constructor(private http: HttpClient) { }

  saveProfile(profile_data) {

    console.log(profile_data);
    
    this.http.post(`${this.url}/add`, profile_data)
    .subscribe( res => console.log('Saved profile successfully'));
  }

  getProfiles() {
    return this.http.get(`${this.url}`);
  }
}
