import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal';

@Component({
  selector: 'app-scale-storage-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './scale-storage-section.html',
  styleUrls: ['./scale-storage-section.scss']
})
export class ScaleStorageSectionComponent {}
