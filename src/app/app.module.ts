import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { MenuComponent } from './menu/menu.component';
import { RecetteComponent } from './recette/recette.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent,
    MenuComponent,
    RecetteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule // on ajoute l'importation du module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
