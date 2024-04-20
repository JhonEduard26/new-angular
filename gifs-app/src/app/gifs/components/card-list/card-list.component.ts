import { Component, Input } from '@angular/core'
import { type Gif } from '../../interfaces/gifs.interfaces'

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input({ required: true }) gifs: Gif[] = []
}
