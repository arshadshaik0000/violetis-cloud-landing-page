// src/app/core/navbar/navbar.ts

import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2
} from '@angular/core';
import { CommonModule, NgFor, NgClass } from '@angular/common';
import { ThemeService } from '../theme.service'; // Service for theme management

/**
 * Interface for defining navigation link properties.
 */
interface NavLink {
  label: string; // Display text for the link
  fragment: string; // Target section ID for scrolling
}

/**
 * NavbarComponent: Manages the main application navigation,
 * including active link highlighting (pill effect) and theme toggling.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgFor, NgClass],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements AfterViewInit {
  // Configuration for navigation links
  navLinks: NavLink[] = [
    { label: 'Home', fragment: 'home' },
    { label: 'About Us', fragment: 'about-us' },
    { label: 'Services', fragment: 'services' },
    { label: 'Contact Us', fragment: 'contact-us' }
  ];

  activeLink = this.navLinks[0].fragment; // Stores the currently active link's fragment
  private activeLinkIndex = 0; // Stores the index of the active link for pill positioning

  // ViewChild and ViewChildren to access DOM elements for the navigation pill effect
  @ViewChild('navPill') private pill!: ElementRef;
  @ViewChild('navContainer') private navContainer!: ElementRef;
  @ViewChildren('navItems') private items!: QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2, // Angular's Renderer2 for safe DOM manipulation
    public themeService: ThemeService // Injected service for theme management
  ) {}

  /**
   * Lifecycle hook: Called after the component's view has been fully initialized.
   * Positions the nav pill under the initial active link.
   */
  ngAfterViewInit() {
    // Timeout ensures DOM elements are fully rendered before calculating position
    setTimeout(() => this.movePill(this.activeLinkIndex), 0);
  }

  /**
   * Sets the active navigation link and triggers pill movement and section scroll.
   * @param fragment The ID of the target section.
   * @param index The array index of the clicked navigation item.
   */
  setActiveLink(fragment: string, index: number) {
    this.activeLink = fragment;
    this.activeLinkIndex = index;
    this.movePill(index);
    this.scrollToSection(fragment);
  }

  /**
   * Handles mouse enter event on navigation items to move the pill.
   * @param index The array index of the hovered navigation item.
   */
  onItemEnter(index: number) {
    this.movePill(index);
  }

  /**
   * Handles mouse leave event from the navigation container to return pill to active link.
   */
  onNavLeave() {
    this.movePill(this.activeLinkIndex);
  }

  /**
   * Calculates and applies the position and width for the navigation pill.
   * @param index The array index of the target navigation item.
   */
  private movePill(index: number) {
    const target = this.items.toArray()[index]?.nativeElement;
    // Exit if target element or required refs are not available
    if (!target || !this.pill || !this.navContainer) return;

    const tr = target.getBoundingClientRect(); // Dimensions of the target item
    const cr = this.navContainer.nativeElement.getBoundingClientRect(); // Dimensions of the navigation container

    // Calculate left position relative to the navigation container
    const left = tr.left - cr.left;

    // Apply styles to the pill element
    this.renderer.setStyle(this.pill.nativeElement, 'width', `${tr.width}px`);
    this.renderer.setStyle(this.pill.nativeElement, 'left', `${left}px`);
  }

  /**
   * Scrolls the viewport to the specified HTML element ID.
   * @param id The ID of the element to scroll to.
   */
  private scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return; // Exit if element not found
    el.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the element's start
  }
}