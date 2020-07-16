import { Component } from '@angular/core';

// importation de classes

export class Pizza { // on créer une nouvelle classe
  id: number; // on lui attribut des propriétés 
  name: string; // ici c'est ce qu'on appelle le typage
  price: number;
  image: string;
}

const PIZZAS: Pizza[] = [
  {id: 1, name: 'Reine', price: 12, image: 'reina.jpeg'},
  {id: 2, name: '4 Fromages', price: 10, image: 'fromage.jpg'},
  {id: 3, name: 'Orientale', price: 13, image: 'orientale.jpg'},
  {id: 4, name: 'Capricioza', price: 15, image: 'capriozia.jpg'}
];

export class Author {
  id: number;
  name: string;
  firstname: string;
  birth: string;
  avatar: string;
}

const AUTHORS: Author[] = [
  {id: 1, name: 'Villiere', firstname: "Emilie", birth: "28/03/1996", avatar: "avatar.png"}
];

export class IngredientList {
  id: number;
  name: string;
  type: string;
  image: string;
}

const INGREDIENTS: IngredientList[] = [
  {id: 1, name: 'Banana', type: 'Fruit', image: 'banana.png'},
  {id: 2, name: 'Tomato', type: 'Legume', image: 'tomato.jpg'},
  {id: 3, name: 'Ananas', type: 'Fruit', image: 'ananas.jpg'},
  {id: 4, name: 'Potatoes', type: 'Legume', image: 'patate.jpg'}
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

  onSelect(pizza: Pizza) { // on déclare un évenement 
    this.selectedPizza = pizza; // ici on peut manipuler notre objet
  }

  ingredients = INGREDIENTS;

  user = AUTHORS[0];
  categories = CATEGORIES;
  
}
