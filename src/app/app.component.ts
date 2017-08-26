import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show = true;

  change() {
    console.log('change....')
  }

  click(){
    this.show = !this.show;
    console.log(this.show)
  }
}
