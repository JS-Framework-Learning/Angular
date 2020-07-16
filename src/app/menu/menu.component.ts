import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() categories: Menu;
  @Input() title: '';

  isCollapsed: boolean = false;

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
