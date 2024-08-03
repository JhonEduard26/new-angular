import { Component, input } from '@angular/core';
import { CountryResponse } from '../../interfaces';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  countries = input.required<CountryResponse[]>()
}
