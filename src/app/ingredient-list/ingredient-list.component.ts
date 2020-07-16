import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IngredientList } from '../app.component';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input() ingredients: IngredientList;
  //on créer un objet EventEmiiter pour nous permettre d'emettre un évenement
  // à partir du composant. On pourra écouter cet événement par la suite.
  @Output() selectedIngredient: EventEmitter<IngredientList> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
