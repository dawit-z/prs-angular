import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: User;
  showConfirmButton: boolean = false;

  constructor(
    private uService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showConfirmButton = !this.showConfirmButton;
  }
  verifyRemove(): void {
    this.uService.remove(this.user.id).subscribe({
      next: () => {
        console.debug("User deleted");
        this.router.navigateByUrl("/users");
      },
      error: (err) => { console.error(err); }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.uService.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => { console.error(err); }
    });
  }
}
