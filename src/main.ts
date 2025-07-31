import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { App } from './app/app'; // Main Angular application component
import { AuthInterceptor } from './app/shared/interceptors/auth.interceptor'; // Custom HTTP interceptor for authentication

import { Chart, registerables } from 'chart.js'; // Chart.js library for data visualization

// Register all Chart.js components globally to ensure they are available for use.
Chart.register(...registerables);

/**
 * Bootstraps the Angular application.
 * Configures global providers, including HTTP client with interceptors and authentication.
 */
bootstrapApplication(App, {
  providers: [
    // Provides HttpClient with support for legacy interceptors (from DI).
    provideHttpClient(withInterceptorsFromDi()),
    // Registers AuthInterceptor as an HTTP interceptor.
    // `multi: true` allows multiple interceptors to be registered.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
.catch(err => console.error(err)); // Catches and logs any errors during application bootstrap.
