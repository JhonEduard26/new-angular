import { Component, inject } from '@angular/core'
import { GifsService } from '../../services/gifs.service'
import { type Gif } from '../../interfaces/gifs.interfaces'

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  private readonly gifsService = inject(GifsService)

  get gifs (): Gif[] {
    return this.gifsService.gifs
  }
}
