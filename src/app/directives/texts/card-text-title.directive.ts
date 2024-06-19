import { Directive } from "@angular/core";

@Directive({
    selector: 'card-text-title',
    host: { 'class' : 'u-card-text-title' }

})
export class CardTextTitleDirective {}