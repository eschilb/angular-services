import { Component, OnInit } from '@angular/core';
import { Person } from '../person'; 

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent implements OnInit {
  person: Person;
  constructor() { }

  ngOnInit(): void {
  }

}
