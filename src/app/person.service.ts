import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private peeps: Array<Person> = [
      {id: 1, name: 'Angus'},
      {id: 2, name: 'Estelle'},
      {id: 3, name: 'Tillie'},
      {id: 4, name: 'Elwood'}
  ];

  // let angus = new Person(1, "Angus");
  // let angus: Person;

  constructor(private id: number = 13, private name: string = "Angus") { }

  getPerson(): Observable<Person[]>
    {
      this.delay(4000);
      return of(this.peeps);
    }

  async delay(ms: number) {
   await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }
}
