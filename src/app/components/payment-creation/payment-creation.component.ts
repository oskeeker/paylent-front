import {Component, OnInit} from '@angular/core';
import {Payment} from "../../payment/Payment";
import {PaymentsService} from "../../services/payments.service";
import {UsersService} from "../../services/users.service";
import {User} from "../user-creation/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-payment-creation',
  templateUrl: './payment-creation.component.html',
  styleUrls: ['./payment-creation.component.css']
})
export class PaymentCreationComponent implements OnInit {

  payment = new Payment();
  users: Observable<any> | undefined;
  usersToPay: User[] | undefined

  constructor(private paymentService: PaymentsService, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onClickPayment() {
    console.log(this.payment)
    this.paymentService.savePayments(this.payment);
    this.payment = new Payment();
    window.location.reload();
  }

}
