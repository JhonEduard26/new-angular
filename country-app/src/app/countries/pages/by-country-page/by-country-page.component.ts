import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  private countryService = inject(CountryService);
  public countries: CountryResponse[] = [];
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  searchByName(term: string): void {
    this.countryService.searchByName(term)
      .subscribe(countries => {
        this.countries = countries;
      })
  }
}
