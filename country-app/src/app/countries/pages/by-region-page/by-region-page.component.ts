import { Component, inject, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.interface';
import { CountryResponse } from '../../interfaces';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  private countryService = inject(CountryService);
  public countries: CountryResponse[] = []

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {

    this.selectedRegion = region;

    this.countryService.searchByRegion(region)
      .subscribe(countries => {
        this.countries = countries;
      })
  }
}
