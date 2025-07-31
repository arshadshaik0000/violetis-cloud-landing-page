import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal';

@Component({
  selector: 'app-developer-control-section',
  standalone: true,
  imports: [
    CommonModule,
    ScrollRevealDirective
  ],
  templateUrl: './developer-control-section.html',
  styleUrls: ['./developer-control-section.scss']
})
export class DeveloperControlSectionComponent {
  // Component logic can be added here if needed.
}
