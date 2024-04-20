import { Component, inject } from '@angular/core'
import { GifsService } from '../../services/gifs.service'
import { type Gif } from '../../interfaces/gifs.interfaces'

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  private readonly gifsService = inject(GifsService)

  get gifs (): Gif[] {
    return this.gifsService.gifs
  }
}
