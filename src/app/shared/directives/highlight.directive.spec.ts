import { HighlightDirective } from './highlight.directive';
import { ElementRef } from "@angular/core/core";

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = null;
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
