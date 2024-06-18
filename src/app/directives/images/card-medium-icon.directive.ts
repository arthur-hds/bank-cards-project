import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardMediumIcon]',
  host: { 'class' : "card-component__medium-image" }
})
export class CardMediumIconDirective {}
