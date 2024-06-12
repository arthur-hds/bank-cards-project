import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content, [appCardContent]',
  host: {'class': 'card-component__content'}
})
export class CardContentDirective {}
