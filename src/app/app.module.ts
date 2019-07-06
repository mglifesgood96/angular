import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicingModule } from './invoicing/invoicing.module';
import { HeroModule } from './hero/hero.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoicingModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
