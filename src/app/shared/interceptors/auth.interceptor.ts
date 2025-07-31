import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; // Imports the authentication service to get the token

/**
 * AuthInterceptor: Intercepts HTTP requests to add an Authorization header
 * with a bearer token if available.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
    // Injects AuthService to access the authentication token.
  }

  /**
   * Intercepts an outgoing HTTP request.
   * If an authentication token is present, it clones the request and adds the Authorization header.
   * @param req The outgoing HttpRequest.
   * @param next The next interceptor in the chain or the backend handler.
   * @returns An Observable of the HTTP event stream.
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth.token(); // Retrieves the current authentication token from AuthService.

    if (token) {
      // Clones the request and sets the Authorization header with the bearer token.
      // Request objects are immutable, so cloning is necessary to modify them.
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    // Passes the (modified or original) request to the next handler in the chain.
    return next.handle(req);
  }
}