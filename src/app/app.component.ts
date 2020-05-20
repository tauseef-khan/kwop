import { Component } from '@angular/core';

@Component({
  selector: 'kw-root',
  template: `  
  <div class='container'>
    <kw-order-selection></kw-order-selection>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kwop';
}
