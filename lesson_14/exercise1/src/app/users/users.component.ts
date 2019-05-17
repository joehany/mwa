import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  template: `
    <h1>Users Page</h1>

    <table>
      <thead>
        <th>Name</th>
        <th>email</th>
        <th>gender</th>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>
            <a routerLink="/users/{{user.login.uuid}}">{{user.name.first}} {{user.name.last}}
            </a>
          </td>
          <td>{{user.email}}</td>
          <td>{{user.gender}}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class UsersComponent implements OnInit {
  users;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getCachedData();
  }

}
