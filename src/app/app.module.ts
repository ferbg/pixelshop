import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//  Components
import { AppComponent } from './app.component';
import { StatefulComponent } from './stateful/stateful.component';
import { StatelessComponent } from './stateless/stateless.component';
import { ConfirmComponent } from './confirm/confirm.component';

//  Pipes
import { PricePipe } from './price.pipe';

//  Services
import { CartService } from './cart.service';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefulComponent,
    StatelessComponent,
    ConfirmComponent,
    PricePipe,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
