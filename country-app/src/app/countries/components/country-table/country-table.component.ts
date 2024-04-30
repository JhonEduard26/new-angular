import { Component, Input } from '@angular/core'
import { type Country } from '../../interfaces/country'

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input({ required: true })
  public countries: Country[] = []
}
