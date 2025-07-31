import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.html',
  styleUrls: ['./feature-card.scss']
})
export class FeatureCardComponent {
  /**
   * Input property: URL or path to the icon image for the feature card.
   * This value is passed from the parent component.
   */
  @Input() icon!: string;

  /**
   * Input property: The title text for the feature card.
   * This value is passed from the parent component.
   */
  @Input() title!: string;

  /**
   * Input property: The descriptive text for the feature card.
   * This value is passed from the parent component.
   */
  @Input() description!: string;
}
