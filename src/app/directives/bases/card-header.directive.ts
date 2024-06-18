import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-header, [appCardHeader]',
  host: { 'class': 'card-component__header' }
})
export class CardHeaderDirective {
  /* 
  @Input()
  @HostBinding('style.backgroundColor')
  color : string = ''
  */
}
