import { Component, OnInit } from '@angular/core';
import { routes } from '../../../app-routes';

interface MenuItem {
  path?: string;
  title?: string;
}

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  public menuItems: Array<MenuItem> = [];

  ngOnInit(): void {
    routes.map(({ path, title }) => this.menuItems.push({path, title: title?.toString()}));
  }

  get itemsCount(): number {
    return this.menuItems.length;
  }
}