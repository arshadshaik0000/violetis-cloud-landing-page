import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'; // RxJS operator for side effects

/**
 * Interface for the login request payload.
 */
interface LoginRequest {
  username: string; // User's username.
  password: string; // User's password.
  role: string; // User's role (e.g., 'admin', 'user').
}

/**
 * Interface for the login response payload.
 */
interface LoginResponse {
  token: string; // JWT token returned upon successful login.
}

/**
 * AuthService: Manages user authentication state, including login, logout,
 * and persistent storage of the authentication token.
 */
@Injectable({ providedIn: 'root' }) // Makes the service a singleton provided at the application root.
export class AuthService {
  // Private writable signal for the authentication token.
  private _token = signal<string | null>(null);
  // Public readonly signal for subscribers to observe token changes.
  readonly token = this._token.asReadonly();

  constructor(private http: HttpClient) {
    // Injects HttpClient for making HTTP requests.
    // Attempts to load a previously saved token from localStorage on service initialization.
    const savedToken = localStorage.getItem('auth_token');
    if (savedToken) {
      this._token.set(savedToken); // Set the signal if a token is found.
    }
  }

  /**
   * Sends a login request to the backend.
   * On successful login, stores the received JWT in localStorage and updates the token signal.
   * @param username The user's username.
   * @param password The user's password.
   * @param role The user's role.
   * @returns An Observable of the LoginResponse.
   */
  login(username: string, password: string, role: string) {
    return this.http
      .post<LoginResponse>('/auth/login', { username, password, role })
      .pipe(
        // Use tap to perform side effects (store token) without modifying the observable stream.
        tap(res => {
          localStorage.setItem('auth_token', res.token); // Persist the token in localStorage.
          this._token.set(res.token); // Update the token signal.
        })
      );
  }

  /**
   * Clears the authentication token from localStorage and resets the token signal.
   */
  logout() {
    localStorage.removeItem('auth_token'); // Remove the token from persistent storage.
    this._token.set(null); // Reset the token signal to null.
  }
}