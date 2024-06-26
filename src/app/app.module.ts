import { NgModule } from '@angular/core';
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
    CardLargeIconDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
