import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../app.component';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() selectedPizza: Pizza;

  constructor() { }

  ngOnInit(): void {
  }

}
