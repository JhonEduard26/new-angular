import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly countryService = inject(CountryService);
  public countries: CountryResponse[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.countryService.searchByAlphaCode(id);
    })
  }
}
