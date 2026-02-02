import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    this.errorMessage = '';
    this.loading = true;

    const isValid = this.authService.login(this.username, this.password);

    if (isValid) {
      this.loading = false;
      this.router.navigate(['/home']);
    } else {
      this.loading = false;
      this.errorMessage = 'Invalid username or password';
    }

    this.password = '';
  }
}
