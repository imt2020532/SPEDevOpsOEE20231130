import { Component, Output, EventEmitter } from '@angular/core';
import { SharedserviceService } from 'src/app/services/sharedservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Username: string = '';
  Password: string = '';
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: SharedserviceService) { }

  onSubmit() {
    // Call the login API using the AuthService
    this.authService.login(this.Username, this.Password).subscribe(
      response => {
        // Handle the login success, e.g., store user data in local storage
        console.log('Login successful');
        this.loginSuccess.emit(); // Emit login success event
      },
      error => {
        // Handle the login error
        console.error('Login failed', error);
      }
    );
  }
}
