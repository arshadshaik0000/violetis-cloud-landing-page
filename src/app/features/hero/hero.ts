import { Component, AfterViewInit, OnDestroy, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal'; // Custom directive for scroll animations

/**
 * HeroComponent: Manages the interactive hero section with parallax and tilt effects.
 * Applies visual transformations based on mouse movement (desktop) or device orientation (mobile).
 */
@Component({
  selector: 'app-hero',
  standalone: true, // Marks this component as standalone
  imports: [CommonModule, NgOptimizedImage, ScrollRevealDirective], // Required modules and directives
  templateUrl: './hero.html', // Path to the component's HTML template
  styleUrls: ['./hero.scss'], // Path to the component's SCSS styles
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private heroVisual!: HTMLElement; // Reference to the .hero-visual DOM element
  // Detects if the device is mobile (coarse pointer indicates touch screen)
  private isMobile: boolean = window.matchMedia('(pointer: coarse)').matches;

  constructor(
    private el: ElementRef<HTMLElement>, // Reference to the host element
    private renderer: Renderer2 // Angular's Renderer2 for safe DOM manipulation
  ) {}

  /**
   * Lifecycle hook: Called after the component's view has been fully initialized.
   * Initializes `heroVisual` and sets up device orientation listener for mobile.
   */
  ngAfterViewInit(): void {
    // Safely get the .hero-visual element from the component's view
    this.heroVisual = this.el.nativeElement.querySelector('.hero-visual') as HTMLElement;

    // Attach device orientation listener only for mobile devices that support the event
    if (this.isMobile && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.handleOrientation, true);
    }
  }

  /**
   * HostListener for desktop mouse movement.
   * Calculates and applies parallax transformations to hero visuals based on mouse position.
   * @param e The MouseEvent object.
   */
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    // Only apply for desktop and if heroVisual element exists
    if (this.isMobile || !this.heroVisual) return;

    const { left, top, width, height } = this.heroVisual.getBoundingClientRect();
    // Calculate mouse position relative to the center of heroVisual
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    const intensity = 15; // Controls the strength of the parallax effect

    // Apply rotation and translation using CSS custom properties
    this.renderer.setStyle(this.heroVisual, '--ry', `${(x / width) * intensity}deg`);
    this.renderer.setStyle(this.heroVisual, '--rx', `${(y / height) * -intensity}deg`);
    this.renderer.setStyle(this.heroVisual, '--y-popup', `${y / 20}px`);
    this.renderer.setStyle(this.heroVisual, '--x-popup', `${x / 20}px`);
    this.renderer.setStyle(this.heroVisual, '--y-icon', `${y / 15}px`);
    this.renderer.setStyle(this.heroVisual, '--x-icon', `${x / 15}px`);
  }

  /**
   * Private handler for mobile device orientation events.
   * Applies tilt transformations to hero visuals based on device orientation data.
   * @param event The DeviceOrientationEvent object.
   */
  private handleOrientation = (event: DeviceOrientationEvent): void => {
    if (!this.heroVisual) return;

    const gamma = event.gamma ?? 0; // Front to back motion (tilt left/right)
    const beta = event.beta ?? 0;   // Left to right motion (tilt front/back)
    const intensity = 10; // Controls the strength of the tilt effect

    // Apply rotation based on device tilt using CSS custom properties
    this.renderer.setStyle(this.heroVisual, '--ry', `${(gamma / 45) * intensity}deg`);
    this.renderer.setStyle(this.heroVisual, '--rx', `${(beta / 45) * -intensity}deg`);
  };

  /**
   * Lifecycle hook: Cleans up resources before the component is destroyed.
   * Removes the device orientation event listener for mobile devices.
   */
  ngOnDestroy(): void {
    if (this.isMobile) {
      window.removeEventListener('deviceorientation', this.handleOrientation, true);
    }
  }
}