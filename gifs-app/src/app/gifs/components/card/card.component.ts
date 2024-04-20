import { Component, Input } from '@angular/core'
import { type Gif } from '../../interfaces/gifs.interfaces'

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true })
  public gif!: Gif
}
