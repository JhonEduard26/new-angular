import { Component, input, output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  initialValue = input<string>();
  placeholder = input.required<string>();
  onSearch = output<string>();

  search(term: string): void {
    this.onSearch.emit(term);
  }
}
