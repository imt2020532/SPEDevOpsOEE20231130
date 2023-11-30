import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OEE';
  sideNavStatus = false;

  isLoggedIn = false;

  onLoginSuccess() {
    this.isLoggedIn = true;
  }
}
