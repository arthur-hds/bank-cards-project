import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { CreditCardComponent } from './components/bases/credit-card/credit-card.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { BalanceCardComponent } from './components/bases/balance-card/balance-card.component';
import { DebitCardComponent } from './components/bases/debit-card/debit-card.component';
import { ClientCardComponent } from './components/bases/client-card/client-card.component';
import { CardTittleComponent } from './components/card-tittle/card-tittle.component';
import { RowHighlightedDirective } from './directives/row-highlighted.directive';
import { ItemLineComponent } from './components/item-line/item-line.component';
import { CardTextTitleDirective } from './directives/card-text-title.directive';
import { CardTextItemDirective } from './directives/card-text-item.directive';
import { CardHeaderDirective } from './directives/bases/card-header.directive';
import { CardContentDirective } from './directives/bases/card-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    CreditCardComponent,
    CardItemComponent,
    BalanceCardComponent,
    DebitCardComponent,
    ClientCardComponent,
    CardTittleComponent,
    RowHighlightedDirective,
    ItemLineComponent,
    CardTextTitleDirective,
    CardTextItemDirective,
    CardHeaderDirective,
    CardContentDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
