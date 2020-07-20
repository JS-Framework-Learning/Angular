import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-page', 
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contact = {
    email: '',
    subject: '',
    message: ''
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  send() {
    // c'est ici que l'on fait une requette http sur notre API 

    this.http.post('http://localhost:3000/contacts', this.contact).subscribe();
    console.log(this.contact);
    alert('ok');
  }

}
