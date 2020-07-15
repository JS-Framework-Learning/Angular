import { Component, OnInit, Input } from '@angular/core';
import { IngredientList } from '../app.component';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input() ingredients: IngredientList;

  constructor() { }

  ngOnInit(): void {
  }

}
