import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p *ngFor="let user of users">
      <app-dumb [model]=user> </app-dumb>
    </p>`
})
export class SmartComponent implements OnInit {
  users = [
    { name: "Joseph", age:32 },
    { name: "Karim", age: 32 }
  ];

  constructor() { 
  }

  ngOnInit() {

  }

}
