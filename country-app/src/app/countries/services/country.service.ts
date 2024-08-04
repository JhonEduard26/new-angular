import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

import { CacheStore } from '../interfaces/cache-store.interface';
import { CountryResponse } from '../interfaces';
import { Region } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient);

  constructor() {
    this.loadFromLocalStorage();
  }

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private fetchCountries(endpoint: string): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(`${this.baseUrl}/${endpoint}`)
      .pipe(
        catchError(() => of([]))
      )
  }

  searchByCapital(term: string): Observable<CountryResponse[]> {
    return this.fetchCountries(`capital/${term}`)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  searchByName(term: string) {
    return this.fetchCountries(`name/${term}`)
      .pipe(
        tap(countries => this.cacheStore.byCountries = { term, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  searchByRegion(region: Region) {
    return this.fetchCountries(`region/${region}`)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  searchByAlphaCode(alphaCode: string) {
    this.fetchCountries(`alpha/${alphaCode}`);
  }
}
