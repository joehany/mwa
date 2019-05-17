import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <div>
      <h1>{{model.name.first | uppercase}} {{model.name.last | uppercase}}</h1>
      <img src="{{model.picture.large}}" alt="{{model.name.first}} {{model.name.last}}">
      <p>{{model.email}}</p>
      <p><strong>Phone: </strong>{{model.cell}}</p>
      <p><strong>Address: </strong>{{model.location.street}}<br>
      {{model.location.city}}, {{model.location.state}}</p>
    </div>
  `
})
export class UserDetailsComponent implements OnInit {
  model;
  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.model = usersService.getCachedData().find(u => u.login.uuid === params['uuid'])
    })
  }

  ngOnInit() {
  }

}
