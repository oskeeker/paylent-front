import {User} from "../components/user-creation/User";

export class Payment {
  value: number | undefined;
  date: string | undefined;
  description: string | undefined;
  user: User | undefined;
  usersToPay: User[] | undefined;

}
