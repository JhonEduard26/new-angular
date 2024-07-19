import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient);
  country = signal<any>([]);

  search(term: string) {
    this.http.get(`${this.baseUrl}/capital/${term}`).subscribe({
      next: (c) => {
        this.country.set(c);
      },
      error: (e) => console.log(e)
    })
  }
}
