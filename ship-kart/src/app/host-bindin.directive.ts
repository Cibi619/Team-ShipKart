import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

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
