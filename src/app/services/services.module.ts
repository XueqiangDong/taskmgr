import {NgModule} from '@angular/core';
import {QuoteService} from './quote.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    QuoteService,
  ],
  exports: [QuoteService],
  declarations: [QuoteService]
})
export class ServicesModule {
}
