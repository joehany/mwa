import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a> |
    <a routerLink="/users">Users</a>
    <hr>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'exercise1';
  constructor(private users: UsersService) {
    console.log(users.getOnlineData());
    users.getOnlineData().subscribe(
      data => {
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data.results));        
      }
    );
  }
}
