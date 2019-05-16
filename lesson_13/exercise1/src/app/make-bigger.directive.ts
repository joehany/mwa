import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective implements OnInit {
  constructor() { }

  ngOnInit() {
    this.font = 18;
  }

  @HostBinding('style.fontSize.px') font;
  @HostListener('dblclick', ['$event.target'])
  onClick() {
    this.font += 2;
  }

}
