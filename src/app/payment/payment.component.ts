import {Component, OnInit} from '@angular/core';
import {User} from "../components/user-creation/User";

// export interface Payment {
//   value: any;
//   date: String;
//   description: string;
//   user: User;
//   users: User[]
// }

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


}
