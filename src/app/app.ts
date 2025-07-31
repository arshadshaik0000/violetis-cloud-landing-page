import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ScrollRevealDirective } from './directives/scroll-reveal';

import { NavbarComponent } from './core/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { HighlightsComponent } from './features/highlights/highlights/highlights';
import { DashboardSectionComponent } from './components/dashboard-section/dashboard-section';
import { ScaleStorageSectionComponent } from './features/scale-storage/scale-storage-section/scale-storage-section';
import { AiApiSectionComponent } from './features/ai-api/ai-api-section/ai-api-section';
import { DeployMonitorSectionComponent } from './features/deploy-monitor/deploy-monitor-section/deploy-monitor-section';
import { DeveloperControlSectionComponent } from './features/developer-control/developer-control-section/developer-control-section';
import { PricingPlansSectionComponent } from './features/pricing-plans/pricing-plans-section/pricing-plans-section';
import { CtaSectionComponent } from './features/cta/cta-section/cta-section';
import { DeveloperDashboardSectionComponent } from "./features/developer-dashboard/developer-dashboard-section/developer-dashboard-section";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    ScrollRevealDirective,
    NavbarComponent,
    HeroComponent,
    HighlightsComponent,
    DashboardSectionComponent,
    ScaleStorageSectionComponent,
    AiApiSectionComponent,
    DeployMonitorSectionComponent,
    DeveloperControlSectionComponent,
    PricingPlansSectionComponent,
    CtaSectionComponent,
    DeveloperDashboardSectionComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  readonly title = signal('violetis-cloud-landing-page');
}