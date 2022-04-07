export class User {
  id: number = 0;
  username: string = "";
  password: string = "";
  firstname: string = "";
  lastname: string = "";
  phone: string = "";
  email: string = "";
  isReviewer: boolean = false;
  isAdmin: boolean = false;
  name: string = this.firstname + this.lastname;
}