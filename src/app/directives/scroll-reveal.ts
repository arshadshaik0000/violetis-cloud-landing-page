import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
  OnDestroy
} from '@angular/core';

/**
 * ScrollRevealDirective: Applies a 'scroll-reveal' effect to elements.
 * Elements become visible or trigger an animation when they enter the viewport.
 */
@Directive({
  selector: '[appScrollReveal]', // Selector to apply this directive
  standalone: true // Marks the directive as standalone
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  /**
   * Input property: Delay in milliseconds before the reveal animation starts.
   * Defaults to 0ms.
   */
  @Input() delay: number = 0;

  private observer!: IntersectionObserver; // IntersectionObserver instance for detecting viewport entry

  constructor(
    private el: ElementRef, // Reference to the host element
    private renderer: Renderer2 // Angular's Renderer2 for safe DOM manipulation
  ) {}

  /**
   * Lifecycle hook: Called after the directive's host view has been fully initialized.
   * Sets up the IntersectionObserver and applies the animation delay.
   */
  ngAfterViewInit(): void {
    // Apply the input delay as a CSS custom property for use in CSS transitions/animations.
    this.renderer.setStyle(
      this.el.nativeElement,
      '--delay-ms',
      `${this.delay}ms`
    );

    // Configuration options for the IntersectionObserver.
    const options: IntersectionObserverInit = {
      root: null, // Observes intersection with the viewport
      rootMargin: '0px 0px -10% 0px', // Triggers when element is 10% from the bottom of the viewport
      threshold: 0.1 // Triggers when 10% of the target element is visible
    };

    // Initialize the IntersectionObserver.
    this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add 'in-view' class when the element enters the viewport.
          this.renderer.addClass(this.el.nativeElement, 'in-view');
          // Stop observing the element once it's in view to prevent re-triggering.
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    // Start observing the host element.
    this.observer.observe(this.el.nativeElement);
  }

  /**
   * Lifecycle hook: Called once before the directive is destroyed.
   * Disconnects the IntersectionObserver to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect(); // Clean up the observer
    }
  }
}