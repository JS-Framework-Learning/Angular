import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../app.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() user: Author;

  constructor() { }

  ngOnInit(): void {
  }

}
