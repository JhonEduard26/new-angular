import { Component, Input } from '@angular/core'

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {
  @Input({ required: true })
  public src!: string

  @Input({ required: true })
  public altText!: string

  public hasLoaded = false

  onLoad (): void {
    this.hasLoaded = true
  }
}
