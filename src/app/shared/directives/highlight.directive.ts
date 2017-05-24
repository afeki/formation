import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

// tslint:disable-next-line:no-input-rename
@Input() highlighltColor: string;

  constructor(private el: ElementRef) { 
 //   el.nativeElement.style.backgroundColor = 'yellow';
  //  console.log("el", el);
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlighltColor );
  }

 @HostListener('mouseleave') onMouseleave(){
    this.highlight('pink');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
