import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'jhon';
  public upperLower: string = 'JHON';
  public fullName: string = 'jHoN bOCaneGRa';

  public customDate: Date = new Date();
}
