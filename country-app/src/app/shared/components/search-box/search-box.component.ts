import { Component, Input, output } from '@angular/core'

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input({ required: true })
  public placeholder: string = ''

  onValue = output<string>()

  setNewSearch (newValue: string): void {
    this.onValue.emit(newValue)
  }
}
