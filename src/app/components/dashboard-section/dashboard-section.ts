import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-dashboard-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './dashboard-section.html',
  styleUrls: ['./dashboard-section.scss']
})
export class DashboardSectionComponent {}
