import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardLargeIcon]',
  host: {'class': "card-component__large-image"}
})
export class CardLargeIconDirective {

  constructor() { }

}
