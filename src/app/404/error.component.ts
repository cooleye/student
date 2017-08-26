import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
      <h1>{{ msg}}</h1>
  `
})
export class ErrorComponent {
  msg = '404 page not find';
}
