import { Component, inject } from '@angular/core'
import { CountryService } from '../../services/country.service'
import { type Country } from '../../interfaces/country'

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  private readonly countryService = inject(CountryService)
  public countries: Country[] = []

  searchByRegion (region: string): void {
    console.log('Desde by capitalpage')
    this.countryService.searchRegion(region).subscribe({
      next: (countries) => {
        this.countries = countries
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
