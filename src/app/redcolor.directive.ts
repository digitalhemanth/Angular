import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[Redcolord]'
})
export class RedcolorDirective {

  constructor(element : ElementRef) {
element.nativeElement.style.color="red";
  }

}
