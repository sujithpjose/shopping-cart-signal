import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CartContainerComponent,
    CartListComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
