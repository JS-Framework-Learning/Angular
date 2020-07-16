import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../app.component';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  @Input() recettes: Recette;

  constructor() { }

  ngOnInit(): void {
  }

}
