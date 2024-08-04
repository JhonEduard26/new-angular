import { Component, inject } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.interface';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  private countryService = inject(CountryService);
  countries = this.countryService.countries

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  searchByRegion(region: Region): void {

    this.selectedRegion = region;

    this.countryService.searchByRegion(region);
  }
}
