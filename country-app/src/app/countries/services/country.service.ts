import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { catchError, of, type Observable } from 'rxjs'
import { type Country } from '../interfaces/country'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly apiUrl = 'https://restcountries.com/v3.1/'
  private readonly http = inject(HttpClient)

  searchCapital (q: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}capital/${q}`)
      .pipe(catchError(() => of([])))
  }

  searchCountry (q: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}name/${q}`)
      .pipe(catchError(() => of([])))
  }

  searchRegion (region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}region/${region}`)
      .pipe(catchError(() => of([])))
  }
}
