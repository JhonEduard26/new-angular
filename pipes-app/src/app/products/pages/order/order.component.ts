import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | '' = '';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: 'blue'
    },
    {
      name: 'Batman',
      canFly: false,
      color: 'black'
    },
    {
      name: 'Robin',
      canFly: false,
      color: 'green'
    },
    {
      name: 'Flash',
      canFly: false,
      color: 'red'
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: 'green'
    }
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  toggleSort(sortBy: keyof Hero) {
    this.sortBy = sortBy;
  }
}
