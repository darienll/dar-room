import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective {

  spinnerElement: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input()
  set appLoading(condition: boolean) {
    if (condition) {
      this.setLoadingElement();
    } else {
      this.setDefaultElement();
    }
  }

  createSvg() {
    this.spinnerElement = this.renderer.createElement('i');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.renderer.setAttribute(svg, 'width', '100%');
    this.renderer.setAttribute(svg, 'height', '100%');
    this.renderer.setAttribute(svg, 'viewBox', '0 0 100 100');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.renderer.setAttribute(path1, 'fill', 'none');
    this.renderer.setAttribute(path1, 'cx', '50');
    this.renderer.setAttribute(path1, 'cy', '50');
    this.renderer.setAttribute(path1, 'r', '35');
    this.renderer.setAttribute(path1, 'stroke', 'currentColor');
    this.renderer.setAttribute(path1, 'stroke-width', '10');
    this.renderer.setAttribute(path1, 'stroke-dasharray', '164.93361431346415 56.97787143782138');

    this.renderer.appendChild(svg, path1);

    this.renderer.appendChild(this.spinnerElement, svg);
    this.renderer.appendChild(this.el.nativeElement, this.spinnerElement);
  }

  setLoadingElement() {
    this.createSvg();
    this.renderer.addClass(this.el.nativeElement, 'btn--loading');
  }

  setDefaultElement() {
    if (this.spinnerElement) {
      this.renderer.removeChild(this.el.nativeElement, this.spinnerElement);
    }

    this.renderer.removeClass(this.el.nativeElement, 'btn--loading');
  }
}
