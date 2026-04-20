import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[apphighlight]',
  standalone: true
})
export class highlight {
  constructor( private  element: ElementRef) {
    
  }
  @Input ('apphighlight') color:string | null | undefined='yellow'
  @HostListener('mouseenter')
  onmouseenter(){
    console.log("mouseentered")
    this.element.nativeElement.style.backgroundColor=this.color
  }
  @HostListener('mouseleave')
  onmouseleave(){
    console.log("mouseleft")
    this.element.nativeElement.style.backgroundColor=this.color!
  }
}
