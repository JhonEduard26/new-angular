import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  public name: string = 'Jhon';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Daniela';
    this.gender = 'female';
  }

  // i18n plural pipe
  public clients: string[] = ['Jhon', 'Daniela', 'Pedro', 'Maria'];
  public clientsMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'hay 1 cliente esperando',
    'other': 'hay # clientes esperando'
  }

  popClients(): void {
    this.clients.shift();
  }

  // Key value pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async pipe
  public myObservableTimer = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3500);
  });
}
