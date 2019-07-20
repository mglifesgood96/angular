import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoicePositionsComponent } from './invoice-positions/invoice-positions.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SinglePositionComponent } from './single-position/single-position.component';
import { PriceCalculator } from './model/price-calculation/price-calculator';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ItemCatalog } from './model/item-catalog/item-catalog';
import { LocalItemCatalog } from './model/item-catalog/local-item-catalog';
import { ClientCatalog } from './model/client-catalog/client-catalog';
import { ClientItemCatalog } from './model/client-catalog/client-item';
import { HttpItemCatalog } from './model/item-catalog/http-item-catalog';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [InvoicePositionsComponent, InvoiceComponent, SinglePositionComponent, InvoiceSummaryComponent, ClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [InvoiceComponent],
  providers: [
    {
      provide: PriceCalculator, useFactory: () => new PriceCalculator()
    },
    // {
    //   provide: ItemCatalog, useFactory: () => new LocalItemCatalog()
    // }
    {
      provide: ClientCatalog, useFactory: () => new ClientItemCatalog()
    },
    {
      provide: ItemCatalog, useFactory: (http: HttpClient) => new HttpItemCatalog(http), deps: [HttpClient]
    }
  ]
})
export class InvoicingModule { }
