import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input('isVisible') isVisible: boolean;

  constructor() {
  }

  @HostBinding('style.display') display;

  ngOnInit() {
    console.log(this.isVisible);
    this.display = this.isVisible? 'block' : 'none';
  }
}
