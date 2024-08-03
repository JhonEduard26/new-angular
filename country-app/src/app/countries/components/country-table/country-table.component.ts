import { Component, input } from '@angular/core';
import { CountryResponse } from '../../interfaces';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent {
  countries = input.required<CountryResponse[]>()
}
