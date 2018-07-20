import { Directive, AfterViewInit, HostListener } from '@angular/core';
import { MatRipple } from '@angular/material';

@Directive({
  selector: '[tsys-ripple]',
  providers: [ MatRipple ]
})
export class RippleDirective implements AfterViewInit {
  constructor(
    private ripple: MatRipple
  ) { }

  @HostListener('mousedown', [ '$event' ]) onmousedown(event) {
    this.ripple.launch(event.x, event.y);
  }

  ngAfterViewInit() {}
}