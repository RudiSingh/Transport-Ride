import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() time: string;
  constructor(private el: ElementRef) {
    let date = new Date();
    let currenthour = date.getHours();
    debugger;
    if(currenthour-1 == Number(this.time) ){
       el.nativeElement.style.backgroundColor = 'green';
    }else if( currenthour  == Number(this.time)){
      el.nativeElement.style.backgroundColor = 'green';
    }else if (currenthour +1 == Number(this.time)){
      el.nativeElement.style.backgroundColor = 'green';
    }else{
      el.nativeElement.style.backgroundColor = 'red';
    }
    
 }
//  private highlight(color: string) {
//   this.el.nativeElement.style.backgroundColor = color;
// }

 
}
