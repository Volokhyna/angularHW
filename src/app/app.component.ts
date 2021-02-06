import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is new page';
  count = 0.95;

  time = new Promise(resolve => {setTimeout(() => {
    resolve(200);
  }, 2000);
  });
}
