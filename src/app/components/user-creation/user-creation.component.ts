import {Component, OnInit} from '@angular/core';
import {User} from "./User";
import {UsersService} from "../../services/users.service";


@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  user = new User();

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  onClickUser() {
    this.user.balance = 0;
    this.userService.saveUser(this.user);
    this.user = new User();
    window.location.reload();
  }

}
