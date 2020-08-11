import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrls: ['./comp-four.component.css']
})
export class CompFourComponent implements OnInit {
  public person: Person;
  peeps: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPerson();
  }

  getPerson(): void {
    this.personService.getPerson()
    .subscribe(peeps => this.peeps = peeps);
  }

}
