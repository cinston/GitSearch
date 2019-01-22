import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username: string;
private clientid = 'b9fcec2b08992757b907';
private clientsecret='20ee09e7af46a2bcbe727a3a828716e0659269a2';



  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'cinston';
   }
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  .map(res => res.json());
 }

}
