import { Component } from '@angular/core';

// importation de classes

export class Pizza { // on créer une nouvelle classe
  id: number; // on lui attribut des propriétés 
  name: string; // ici c'est ce qu'on appelle le typage
  price: number;
}

const PIZZAS: Pizza[] = [
  {id: 1, name: 'Reine', price: 12},
  {id: 2, name: '4 Fromages', price: 10},
  {id: 3, name: 'Orientale', price: 13},
  {id: 4, name: 'Capricioza', price: 15},
  {id: 5, name: 'Calzone', price: 14}
];

export class Author {
  id: number;
  name: string;
  firstname: string;
  birth: string;
  avatar: string;
}

const AUTHORS: Author[] = [
  {id: 1, name: 'Villiere', firstname: "Emilie", birth: "28/03/1996", avatar: "../assets/images/avatar.png"}
];

export class IngredientList {
  id: number;
  name: string;
  type: string;
}

const INGREDIENTS: IngredientList[] = [
  {id: 1, name: 'Banana', type: 'Fruit'},
  {id: 2, name: 'Tomato', type: 'Legume'},
  {id: 3, name: 'Ananas', type: 'Fruit'},
  {id: 4, name: 'Potatoes', type: 'Legume'}
];

export class Menu {
  id: number;
  name: string;
}

const CATEGORIES: Menu[] = [
  {id: 1, name: 'Pizza'},
  {id: 2, name: 'Author'},
  {id: 3, name: 'Ingredient'},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// exportation de classes

export class AppComponent {
  title = 'Pizza Party';

  selectedPizza: Pizza; // on déclare une variable qui contient l'instantiation de notre classe pizza sous forme d'objet 
  pizzas = PIZZAS;

  onSelect(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  user = AUTHORS[0];

  ingredients = INGREDIENTS;

  categories = CATEGORIES;
  
}
