import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { CacheStore } from '../interfaces/cache-store.interface';
import { CountryResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient);
  countries = signal<CountryResponse[]>([]);

  public cacheStore: CacheStore = {
    byCapital:    { term: '',   countries: [] },
    byCountries:  { term: '',   countries: [] },
    byRegion:     { region: '', countries: [] }
  }

  private fetchCountries(endpoint: string) {
    this.http.get<CountryResponse[]>(`${this.baseUrl}/${endpoint}`).subscribe({
      next: (c) => this.countries.set(c),
      error: () => this.countries.set([])
    })
  }

  search(term: string) {
    this.fetchCountries(`capital/${term}`);
  }

  searchByName(name: string) {
    this.fetchCountries(`name/${name}`);
  }

  searchByRegion(region: string) {
    this.fetchCountries(`region/${region}`);
  }

  searchByAlphaCode(alphaCode: string) {
    this.fetchCountries(`alpha/${alphaCode}`);
  }
}
