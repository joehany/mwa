import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue = 10;
  onCounterChanged(value) {
    this.ComponentCounterValue = value;
  }

  ComponentCounter_2_Value = 10;
  onCounter_2_Changed(value) {
    this.ComponentCounter_2_Value = value;
  }
}
