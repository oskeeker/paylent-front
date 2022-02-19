import {Component, OnInit} from '@angular/core';
import {User} from "../user-creation/User";
import {Payment} from "../../payment/Payment";
import {PaymentsService} from "../../services/payments.service";
import {DateUtils} from "../../utils/DateUtils";

export interface PaymentCard {
  value: any;
  date: String;
  description: string;
  user: User;
  users: User[]
}

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})
export class PaymentCardComponent implements OnInit {

  payments: PaymentCard[] = [];

  constructor(private paymentService: PaymentsService) {
  }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getPayments()
      .subscribe((data: any) => {
        data.forEach((payment: Payment) => {

          let currentDate = new Date();
          // @ts-ignore
          let paymentDate = new Date(payment.date);

          this.payments.push(<PaymentCard>{
            date: DateUtils.timeCalculation(currentDate, paymentDate),
            description: payment.description,
            user: payment.user,
            users: payment.usersToPay,
            value: payment.value
          });
        });
      });
  }
}
