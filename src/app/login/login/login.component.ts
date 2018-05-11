import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../domain/quote.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote: Quote = {
    cn: '默认是：',
    en: 'ewtt',
    pic: '/assets/img/quote_fallback.jpg',
  };

  constructor(protected fb: FormBuilder, protected quoteService$: QuoteService) {
    this.quoteService$.getQuote().subscribe(q => this.quote = q);
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wan@lol.com', Validators.compose([Validators.required, Validators.email, this.validator])],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(`${JSON.stringify(value)},${valid}`);
  }

  validator(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    } else {
      return {
        emailNotValid: 'The email not correct'
      };
    }
  }

}
