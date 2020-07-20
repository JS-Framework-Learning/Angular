import { Injectable } from '@angular/core';
import { PIZZAS, Pizza } from '../app.component'; //on vient implémenter noter constante pizza déclarer dans le app.component.ts de base
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PizzaService {

    constructor(private http: HttpClient) {}

    getPizzas(): Promise<Pizza[]> { //on recupère le tableau de stocké dans notre constante 
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas').toPromise(); // avant on retournait notre constante dans un tableau
    //maitnenant on veut retourner notre constante dans un fichier json, toujours sous forme de tableau. Celui-ci est "typé" après le get
    //afin de préciser que c'est un array car de base, Promise renvoi un object. 
    }

    //ici on simule un serveur qui répond en 2sec
    getPizzasSlowly(): Promise<Pizza[]> {
        return new Promise(resolve => setTimeout(() => resolve(this.getPizzas()), 2000 ));
    }

    
}
