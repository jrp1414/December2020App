import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {
  // @Input("test") defaultColor:string;
  @Input("better-highlight") defaultColor:string;
  @Input() highlightColor:string;
  @HostBinding("style") style;
  constructor(public el:ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.highlightColor;
    this.style = {backgroundColor:this.defaultColor};
  }

  // @HostListener("click") OnClick(){
  //   alert("Clicked");
  // }

  @HostListener("mouseenter") OnMouseEnter(){
    this.style = {backgroundColor:this.highlightColor};
  }

  @HostListener("mouseleave") OnMouseLeave(){
    this.style = {backgroundColor:this.defaultColor};
  }

}
