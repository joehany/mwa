import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counterValue;
  @Output() counterChanged = new EventEmitter();
  constructor() {
  }

  increase() {
    this.counterValue++;
    this.counterChanged.emit(this.counterValue)
  }
  decrease() {
    this.counterValue--;
    this.counterChanged.emit(this.counterValue)
  }
}
