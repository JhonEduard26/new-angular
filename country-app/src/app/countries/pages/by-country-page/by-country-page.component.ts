import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  private countryService = inject(CountryService);
  countries = this.countryService.countries

  searchByName(term: string): void {
    this.countryService.searchByName(term);
  }
}
