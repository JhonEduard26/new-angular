import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  private gifsService = inject(GifsService)
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag)

    this.tagInput.nativeElement.value = ''
  }
}
