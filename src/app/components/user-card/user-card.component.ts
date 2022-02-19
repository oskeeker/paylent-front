import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../user-creation/User";

export interface UserCard {
  firstName: string;
  lastName: string;
  balance: any;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  userCards: User[] | undefined;
  @Input() user : User | any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUserCards()
  }

  getUserCards() {
    this.userService.getUsers()
      .subscribe((data: any) => this.userCards = data);
  }

  onCLick() {
    this.user.balance = 0;
    this.userService.saveUser(this.user);
    this.user = new User();
  }

}
