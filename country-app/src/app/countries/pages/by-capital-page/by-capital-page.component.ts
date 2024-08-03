import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  private countryService = inject(CountryService);
  countries = this.countryService.countries

  searchByCapital(term: string): void {
    this.countryService.search(term);
  }
}
