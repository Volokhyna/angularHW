import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor( private element: ElementRef, renderer2: Renderer2) {
    renderer2.setStyle(element.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseover')
  change(): void {
    this.element.nativeElement.style.color = 'red';
  }
}
