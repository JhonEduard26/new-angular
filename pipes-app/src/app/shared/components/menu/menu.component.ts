import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fecha',
            icon: 'pi pi-align-left',
            routerLink: './'
          },
          {
            label: 'Númericos',
            icon: 'pi pi-dollar',
            routerLink: './numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: './uncommon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-star',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-globe'
          }
        ]
      },
    ]
  }
}
