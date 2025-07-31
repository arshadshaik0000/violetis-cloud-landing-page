import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal'; // Custom directive for scroll-triggered animations
import { PricingService } from '../../../shared/services/pricing.service'; // Service to fetch pricing plan data
import { PricingPlan } from '../../../shared/models/pricing-plan.model'; // Interface for pricing plan data structure

/**
 * PricingPlansSectionComponent: Displays a dynamic list of pricing plans.
 * Fetches pricing data via `PricingService` and renders it using signals.
 */
@Component({
  selector: 'app-pricing-plans-section', // Custom HTML tag for this component
  standalone: true, // Marks this component as standalone
  imports: [CommonModule, ScrollRevealDirective], // Required modules and directives
  templateUrl: './pricing-plans-section.html', // Path to the component's HTML template
  styleUrls: ['./pricing-plans-section.scss'] // Path to the component's SCSS styles
})
export class PricingPlansSectionComponent implements OnInit {
  /**
   * Signal holding the array of pricing plans.
   * Signals provide a reactive way to manage component state.
   */
  plans = signal<PricingPlan[]>([]);

  constructor(private pricingService: PricingService) {
    // Injects the PricingService to handle data fetching.
  }

  /**
   * Lifecycle hook: Initializes component data.
   * Subscribes to the `getPlans` observable from `PricingService` to populate `plans`.
   */
  ngOnInit(): void {
    this.pricingService.getPlans().subscribe({
      next: plans => this.plans.set(plans), // Update the signal with fetched plans
      error: err => console.error('Failed to load pricing plans', err) // Log errors during data fetching
    });
  }
}