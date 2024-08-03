import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  private countryService = inject(CountryService);
  countries = this.countryService.countries

  searchByRegion(region: string): void {
    this.countryService.searchByRegion(region);
  }
}
