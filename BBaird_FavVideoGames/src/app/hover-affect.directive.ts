import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  constructor(private elm: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    this.underline(true);
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.underline(false);
  }
  private underline(isHovered: boolean){
    
    this.elm.nativeElement.style.textDecoration = isHovered ? "underline" : "none";
    this.elm.nativeElement.style.fontWeight = isHovered ? "bold" : "normal";
    this.elm.nativeElement.style.border = isHovered ? "2px solid blue" : "none";


    
  }
}

