import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // Angular Material Card module for displaying metrics
import { MatIconModule } from '@angular/material/icon'; // Angular Material Icon module for icons
import { ScrollRevealDirective } from '../../../directives/scroll-reveal'; // Custom directive for scroll-triggered animations

/**
 * Interface for defining the structure of a single usage metric.
 */
interface UsageMetric {
  title: string; // The title of the metric (e.g., 'Total API Calls')
  value: number; // The numerical value of the metric
  unit: string; // The unit of the value (e.g., 'ms', '%', 'TB')
  description: string; // A brief explanation of the metric
  icon: string; // Material icon name for visual representation
  delay: number; // Animation delay for the scroll-reveal effect
}

/**
 * DeveloperDashboardSectionComponent: Displays key cloud service usage metrics.
 * Populates a grid of interactive cards with predefined usage data.
 */
@Component({
  selector: 'app-developer-dashboard-section',
  standalone: true, // Marks this component as standalone
  imports: [
    CommonModule, // Provides common directives like NgFor
    MatCardModule, // Imports MatCard component for metric cards
    MatIconModule, // Imports MatIcon component for displaying icons
    ScrollRevealDirective // Applies scroll-reveal animations to metric cards
  ],
  templateUrl: './developer-dashboard-section.html', // Path to the component's HTML template
  styleUrls: ['./developer-dashboard-section.scss'] // Path to the component's SCSS styles
})
export class DeveloperDashboardSectionComponent implements OnInit {
  usageMetrics: UsageMetric[] = []; // Array to hold the dashboard's usage metric data

  /**
   * Lifecycle hook: Initializes component data.
   * Populates the `usageMetrics` array with static dashboard data.
   */
  ngOnInit(): void {
    this.usageMetrics = [
      {
        title: 'Total API Calls',
        value: 125890,
        unit: '',
        description: 'Cumulative number of API requests made to your services.',
        icon: 'api',
        delay: 0
      },
      {
        title: 'Successful Responses',
        value: 124500,
        unit: '',
        description: 'API calls that returned a successful status code (2xx).',
        icon: 'check_circle',
        delay: 100
      },
      {
        title: 'Error Rate',
        value: 1.1,
        unit: '%',
        description: 'Percentage of API calls resulting in an error (4xx/5xx).',
        icon: 'error',
        delay: 200
      },
      {
        title: 'Data Transferred',
        value: 5.7,
        unit: 'TB',
        description: 'Total volume of data transferred in and out of your services.',
        icon: 'cloud_download',
        delay: 300
      },
      {
        title: 'Active Developers',
        value: 150,
        unit: '',
        description: 'Number of unique developers actively using your APIs this month.',
        icon: 'group',
        delay: 400
      },
      {
        title: 'Average Latency',
        value: 85,
        unit: 'ms',
        description: 'Average response time for API requests.',
        icon: 'speed',
        delay: 500
      },
      {
        title: 'Memory Usage',
        value: 32,
        unit: 'GB',
        description: 'Total memory currently allocated across all instances.',
        icon: 'memory',
        delay: 600
      },
      {
        title: 'Database Queries',
        value: 1200000,
        unit: '',
        description: 'Total number of database queries executed today.',
        icon: 'storage',
        delay: 700
      }
    ];
  }
}