import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private readonly USERNAME = 'AimiliosTsiaprazis';
  private readonly PASSWORD_HASH = '98cdc95ed19080da9b1eb9f8814b661abe0dda7c2d5d2e22adf33fc1081acd36';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  login(username: string, password: string): boolean {
    const enteredHash = CryptoJS.SHA256(password).toString();

    if (username === this.USERNAME && enteredHash === this.PASSWORD_HASH) {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('loggedIn', 'true');
      }
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return localStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('loggedIn');
    }
  }
}
