import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBindin]'
})
export class HostBindinDirective {

  constructor() { }
  Hovercolor:string='blue';
  @HostBinding('style.color') color!: string;
  @HostListener('mouseover') mouseover() {
    this.color =  this.Hovercolor;
  }
  @HostListener('mouseout') mouseout() {
    this.color =  'black';
  }
}
