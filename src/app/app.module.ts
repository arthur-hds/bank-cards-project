import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from "@angular/common/locales/pt"
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './components/bases/credit-card/credit-card.component';
import { BalanceCardComponent } from './components/bases/balance-card/balance-card.component';
import { DebitCardComponent } from './components/bases/debit-card/debit-card.component';
import { ClientCardComponent } from './components/bases/client-card/client-card.component';
import { RowHighlightedDirective } from './directives/texts/row-highlighted.directive';
import { CardTextTitleDirective } from './directives/texts/card-text-title.directive';
import { CardTextItemDirective } from './directives/texts/card-text-item.directive';
import { CardHeaderDirective } from './directives/bases/card-header.directive';
import { CardContentDirective } from './directives/bases/card-content.directive';
import { CardComponent } from './components/bases/card/card.component';
import { CardMediumIconDirective } from './directives/images/card-medium-icon.directive';
import { CardLargeIconDirective } from './directives/images/card-large-icon.directive';
import { CardTittleComponent } from './components/items/card-tittle/card-tittle.component';
import { CardItemComponent } from './components/items/card-item/card-item.component';
import { ItemLineComponent } from './components/items/item-line/item-line.component';


registerLocaleData(localePt, "pt-BR")

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    BalanceCardComponent,
    DebitCardComponent,
    ClientCardComponent,
    RowHighlightedDirective,
    CardTextTitleDirective,
    CardTextItemDirective,
    CardHeaderDirective,
    CardContentDirective,
    CardComponent,
    CardMediumIconDirective,
    CardTittleComponent,
    CardItemComponent,
    ItemLineComponent,
    CardLargeIconDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },

    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "BRL"
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
