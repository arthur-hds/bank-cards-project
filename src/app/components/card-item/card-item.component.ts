import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {

  @Input({required: true, alias: "ItemTittle"}) 
  itemTittle: String = ""


  @Input({required: true, alias: "ItemValue"}) 
  itemValue: String = ""
}
