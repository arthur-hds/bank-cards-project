import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tittle',
  templateUrl: './card-tittle.component.html',
  styleUrl: './card-tittle.component.scss'
})
export class CardTittleComponent {

  @Input({required: true})
  tittle: string = ""

  @Input({required: true})
  icon: string = ""

}
