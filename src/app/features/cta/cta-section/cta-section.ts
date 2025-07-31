// src/app/features/cta/cta-section/cta-section.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './cta-section.html',
  styleUrls: ['./cta-section.scss']
})
export class CtaSectionComponent {}
