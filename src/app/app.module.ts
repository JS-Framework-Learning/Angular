//implémentation des modules de gestions
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// implémentation des modules d'Angular Material
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// implémentation des composants
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { MenuComponent } from './menu/menu.component';
import { RecetteComponent } from './recette/recette.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecepeCreateComponent } from './recepe-create/recepe-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent,
    MenuComponent,
    RecetteComponent,
    FooterComponent,
    HomePageComponent,
    ContactPageComponent,
    RecepeCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule, // on ajoute l'importation du module
    ReactiveFormsModule,
    RouterModule.forRoot([

      { path: '', redirectTo: 'accueil', pathMatch: 'full'},
      { path: 'accueil', component: HomePageComponent }, //déclaration de route sur component HomePage
      { path: 'contact', component: ContactPageComponent }, //déclaration de la page contact 
      { path: 'recettes', component: RecetteComponent } //déclaration de la page recettes 
    ]),
    BrowserAnimationsModule,
    MatStepperModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
