import { Component, OnInit, Input } from '@angular/core';
import { Pizza, INGREDIENTS, SLIDES, RECETTES } from '../app.component'; // ne pas oublier d'importer les variables et constantes 
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Input() title: '';

  selectedPizza: Pizza; // on importe les variables 
  pizzas;

  ingredients = INGREDIENTS; // et constantes afin de pouvoir les utiliser dans les autres composants
  slides = SLIDES; // ne pas oublier de rajouter "export" au début de sa déclaration dans le fichier d'où elle vient
  recettes = RECETTES; // ne pas oublier de rajouter les constantes et variables dans l'importation

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
