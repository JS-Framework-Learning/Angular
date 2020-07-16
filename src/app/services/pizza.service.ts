import { Injectable } from '@angular/core';
import { PIZZAS, Pizza } from '../app.component'; //on vient implémenter noter constante pizza déclarer dans le app.component.ts de base

@Injectable({
    providedIn: 'root'
})

export class PizzaService {
        getPizzas(): Promise<Pizza[]> { //on recupère le tableau de stocké dans notre constante 
        return Promise.resolve(PIZZAS); //on retourne notre constante
    }
    //ici on simule un serveur qui répond en 2sec
    getPizzasSlowly(): Promise<Pizza[]> {
        return new Promise(resolve => setTimeout(() => resolve(this.getPizzas()), 2000 ));
    }
}
