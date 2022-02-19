import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user-creation/User";
import {UsersService} from "../../services/users.service";
import {Payment} from "../../payment/Payment";
import {PaymentsService} from "../../services/payments.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() userInput: User | any;
  @Input() paymentInput: Payment | any;


  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  onClickUser() {
    this.userInput.balance = 0;
    this.userService.saveUser(this.userInput);
    this.userInput = new User();
    window.location.reload();
  }



}
