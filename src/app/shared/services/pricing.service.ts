import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PricingPlan } from '../models/pricing-plan.model'; // Imports the interface for pricing plan data structure

/**
 * PricingService: Provides methods for fetching pricing plan data from a backend API.
 */
@Injectable({ providedIn: 'root' }) // Makes the service a singleton available throughout the application.
export class PricingService {
  private readonly url = '/api/pricing'; // Base URL for the pricing API endpoint.

  constructor(private http: HttpClient) {
    // Injects HttpClient for making HTTP requests.
  }

  /**
   * Fetches all pricing plans from the configured API endpoint.
   * @returns An Observable that emits an array of PricingPlan objects.
   */
  getPlans(): Observable<PricingPlan[]> {
    return this.http.get<PricingPlan[]>(this.url);
  }
}