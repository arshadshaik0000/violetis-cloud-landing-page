import { Injectable } from '@angular/core';

/**
 * ThemeService: Manages the application's theme (light/dark mode).
 * Provides a method to toggle the theme and maintains its current state.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark: boolean = false; // Tracks the current theme state: true for dark, false for light.

  /**
   * Toggles the application's theme between dark and light modes.
   * Updates the `isDark` state and applies/removes the 'dark-theme' class to the document body.
   */
  toggle(): void {
    this.isDark = !this.isDark; // Invert the current theme state
    document.body.classList.toggle('dark-theme', this.isDark); // Apply or remove 'dark-theme' class
  }
}