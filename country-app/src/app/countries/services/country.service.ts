import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { CountryResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient);
  countries = signal<CountryResponse[]>([]);

  search(term: string) {
    this.http.get<CountryResponse[]>(`${this.baseUrl}/capital/${term}`).subscribe({
      next: (c) => {
        this.countries.set(c);
      },
      error: () => this.countries.set([])
    })
  }

  searchByName(name: string) {
    this.http.get<CountryResponse[]>(`${this.baseUrl}/name/${name}`).subscribe({
      next: (c) => {
        this.countries.set(c);
      },
      error: () => this.countries.set([])
    })
  }

  searchByRegion(region: string) {
    this.http.get<CountryResponse[]>(`${this.baseUrl}/region/${region}`).subscribe({
      next: (c) => {
        this.countries.set(c);
      },
      error: () => this.countries.set([])
    })
  }

  searchByAlphaCode(alphaCode: string) {
    this.http.get<CountryResponse[]>(`${this.baseUrl}/alpha/${alphaCode}`).subscribe({
      next: (c) => {
        this.countries.set(c);
      },
      error: () => this.countries.set([])
    })
  }
}
