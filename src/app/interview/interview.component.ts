import { Component } from '@angular/core';

@Component({
  selector: 'interview-review',
  template: `
      <h1>{{ msg}}</h1>
  `
})
export class InterviewComponent {
  msg = '面试复盘';
}
