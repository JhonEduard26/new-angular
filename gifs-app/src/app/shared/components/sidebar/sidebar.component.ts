import { Component, inject } from '@angular/core'
import { GifsService } from '../../../gifs/services/gifs.service'

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  private readonly gifsService = inject(GifsService)

  get tags (): string[] {
    return this.gifsService.tagsHistory
  }
}
