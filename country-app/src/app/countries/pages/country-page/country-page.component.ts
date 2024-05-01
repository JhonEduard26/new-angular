import { Component, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CountryService } from '../../services/country.service'
import { switchMap } from 'rxjs'
import { type Country } from '../../interfaces/country'

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent {
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly router = inject(Router)
  private readonly countryService = inject(CountryService)

  country?: Country

  // * Recomended way
  ngOnInit (): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id as string)))
      .subscribe(country => {
        if (country === null) return this.router.navigateByUrl('/countries/by-capital') as any

        this.country = country
      })
  }

  // ? Observable hell
  // ngOnInit (): void {
  //   this.activatedRoute.params.subscribe(({ id }) => { this.searchCountry(id as string) })
  // }

  // searchCountry (code: string): void {
  //   this.countryService.searchCountryByAlphaCode(code)
  //     .subscribe(country => { console.log(country) })
  // }
}
