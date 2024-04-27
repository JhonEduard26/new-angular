import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { type Observable } from 'rxjs'
import { type Country } from '../interfaces/country'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly apiUrl = 'https://restcountries.com/v3.1/'
  private readonly http = inject(HttpClient)

  searchCapital (q: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}capital/${q}`)
  }
}
