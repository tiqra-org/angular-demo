import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: '<h1>{{ title }}</h1>',
})
export class AboutComponent {
  title = 'About';
}