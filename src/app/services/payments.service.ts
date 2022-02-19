import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../components/user-creation/User";
import {Subscription} from "rxjs";
import {Payment} from "../payment/Payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) {
  }

  getPayments() {
    return this.http.get<any>("http://localhost:8080/payments");
  }

  savePayments(payment: Payment): Subscription {
    const httpOptions =
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    console.log(payment);
    return this.http.post<User>("http://localhost:8080/payments", payment, httpOptions).subscribe();
  }
}
