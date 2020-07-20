import { Component, OnInit, Input } from '@angular/core';
import { RECETTES } from '../app.component';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

    constructor(private http: HttpClient) {}

    recettes = RECETTES;
   
    // rate stars system
    ctrl = new FormControl(null, Validators.required);

    toggle() {

        if (this.ctrl.disabled) {
            this.ctrl.enable();
        } else {
            this.ctrl.disable();
        }
    }

    ngOnInit(): void {
    
    }

}
