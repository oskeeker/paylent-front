import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {User} from "../components/user-creation/User";
import {catchError, Observable, Subscription, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<any>("http://localhost:8080/users");
  }

  saveUser(user: User): Subscription {
    const httpOptions =
      {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      }
    console.log(user);
    return this.http.post<User>("http://localhost:8080/users", user, httpOptions).subscribe();
  }


}
