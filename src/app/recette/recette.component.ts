import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../app.component';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  @Input() recettes: Recette;

  constructor() { }

  ngOnInit(): void {
  }

}
