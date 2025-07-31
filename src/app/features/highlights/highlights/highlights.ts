import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../feature-card/feature-card'; // Imports the reusable FeatureCardComponent
import { ScrollRevealDirective } from '../../../directives/scroll-reveal'; // Imports the custom ScrollRevealDirective

/**
 * HighlightsComponent: Displays a set of key features in a grid.
 * This component uses `FeatureCardComponent` to render individual features
 * and applies scroll-reveal animations.
 */
@Component({
  selector: 'app-highlights', // Custom HTML tag for this component
  standalone: true, // Marks this component as standalone, allowing direct import
  imports: [CommonModule, FeatureCardComponent, ScrollRevealDirective], // Dependencies for this component
  templateUrl: './highlights.html', // Path to the component's HTML template
  styleUrls: ['./highlights.scss'] // Path to the component's SCSS styles
})
export class HighlightsComponent {
  /**
   * Array of feature objects to be displayed in the highlights section.
   * Each object contains properties for icon, title, and description.
   */
  features = [
    {
      icon: 'assets/icon-compute.png',
      title: 'AI-Ready Compute',
      description: 'Run text, image, speech models with optimized hardware.'
    },
    {
      icon: 'assets/icon-pricing.png',
      title: 'Transparent Pricing',
      description: "Know exactly what you're paying for—no surprises."
    },
    {
      icon: 'assets/icon-scaling.png',
      title: 'Global Scaling',
      description: 'Deploy worldwide with low-latency support.'
    }
  ];
}