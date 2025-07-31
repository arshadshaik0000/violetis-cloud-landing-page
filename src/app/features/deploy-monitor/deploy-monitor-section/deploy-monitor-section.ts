import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal';

@Component({
  selector: 'app-deploy-monitor-section',
  standalone: true,
  imports: [
    CommonModule,
    ScrollRevealDirective
  ],
  templateUrl: './deploy-monitor-section.html',
  styleUrls: ['./deploy-monitor-section.scss']
})
export class DeployMonitorSectionComponent {
}