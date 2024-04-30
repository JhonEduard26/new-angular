import { Component, inject } from '@angular/core'
import { CountryService } from '../../services/country.service'
import { type Country } from '../../interfaces/country'

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
  private readonly countryService = inject(CountryService)
  public countries: Country[] = []

  searchByCapital (term: string): void {
    console.log('Desde by capitalpage')
    this.countryService.searchCapital(term).subscribe({
      next: (countries) => {
        this.countries = countries
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
