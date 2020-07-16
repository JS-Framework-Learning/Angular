import { Component } from '@angular/core';
// Déclaration de services 
import { PizzaService } from './services/pizza.service';

// Importation de classes

export class Pizza { // on créer une nouvelle classe
  id: number; // on lui attribut des propriétés 
  name: string; // ici c'est ce qu'on appelle le typage
  price: number;
  image: string;
  ingredient?: IngredientList; //l'ingredient est lié à la classe pizza mais n'ai pas obligatoire.
}

export const PIZZAS: Pizza[] = [
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

export class Recette {
  id: number;
  step: string;
}

const RECETTES: Recette[] = [
  {id: 1, step: 'Verser la farine dans un saladier, y creuser un puits et ajouter eau et sel. Mélanger à la spatule en ajoutant l\'huile d\'olive'},
  {id: 2, step: 'Dans un petit bol, faire fondre la levure dans un peu d\'eau tiède avec 1 pincée de sucre puis l\'ajouter en dernier'},
  {id: 3, step: 'Malaxer jusqu\'à rendre la pâte homogène et faire une boule qui se détache des parois. Note : si besoin ajuster la quantité d\'eau si la pâte est un peu dure en en rajoutant quelques gouttes au fur et à mesure car la quantité exacte dépend de la farine'},
  {id: 4, step: 'Mettre un torchon dessus et laisser reposer à température ambiante/ tiède pendant 1 h environ, le temps que la pâte double de volume'},
  {id: 5, step: 'Pétrir à nouveau la pâte juste pour chasser le gaz puis la diviser en 3 pâtons (d\'environ 250/260 g), ou 4... selon son utilisation et les étaler sur une plaque de cuisson huilée. Laisser reposer une bonne 1/2 h puis garnir selon la recette de pizza choisie ! Voir plus bas des exemples de recettes de pizzas dans la rubrique "Pour terminer".'},
]

export class Menu {
  id: number;
  name: string;
}

const CATEGORIES: Menu[] = [
  {id: 1, name: 'Pizza'},
  {id: 2, name: 'Recettes'},
  {id: 3, name: 'Ingredient'},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Exportation de classes

export class AppComponent {
  title = 'Pizza Party';

  selectedPizza: Pizza; // on déclare une variable qui contient l'instantiation de notre classe pizza sous forme d'objet 
  pizzas;
  ingredients = INGREDIENTS;
  recettes = RECETTES;
  user = AUTHORS[0];
  categories = CATEGORIES;

  // Déclaration de services 
  constructor(private pizzaService: PizzaService) {}

  ngOnInit() { //équivalent au .onDocument ready()
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }

  onSelect(pizza: Pizza) { // on déclare un évenement 
    this.selectedPizza = pizza; // ici on peut manipuler notre objet
  }

  addIngredient(ingredient) {
    this.selectedPizza.ingredient = ingredient;
  }

  
}
