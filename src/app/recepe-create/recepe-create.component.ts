import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recepe-create',
  templateUrl: './recepe-create.component.html',
  styleUrls: ['./recepe-create.component.css']
})
export class RecepeCreateComponent implements OnInit {
    pizza = {
        name: '',
        price: '',
        image: 'reina.jpeg'
    }

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    send() {
        
    }

}
