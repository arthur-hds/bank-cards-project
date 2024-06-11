import { Directive } from "@angular/core";


@Directive({
    selector: "card-text-item",
    host: { 'class': 'u-card-text-item' }

})
export class CardTextItemDirective {}