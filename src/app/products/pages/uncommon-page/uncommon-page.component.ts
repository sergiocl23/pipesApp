import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Sergio';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }


  changeClient():void {
    this.name = 'Andrea'
    this.gender = 'female'
  }

  // i18inPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Sergio', 'Eduardo', 'Hernando','Melissa'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void {
    this.clients.shift();
  }

   // KeyValue Pipe
   public person = {
    name: 'Sergio',
    age: 29,
    address: 'Iquique, Chile',
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value=>console.log('tap', value) )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Carlina'
    }, 3500);
  })

}
