import { Component, inject } from '@angular/core'
import { CountryService } from '../../services/country.service'
import { type Country } from '../../interfaces/country'

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  private readonly countryService = inject(CountryService)
  public countries: Country[] = []

  searchByCountry (term: string): void {
    console.log('Desde by capitalpage')
    this.countryService.searchCountry(term).subscribe({
      next: (countries) => {
        this.countries = countries
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
