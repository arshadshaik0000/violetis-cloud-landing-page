import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal'; // Directive for scroll-triggered animations
import { PromptService, PromptResponse } from '../../../shared/services/prompt.service'; // Service for AI prompt interactions

/**
 * AiApiSectionComponent: Manages the interactive AI API section.
 * Handles user input for prompts, communicates with a backend service,
 * and displays responses or errors.
 */
@Component({
  selector: 'app-ai-api-section',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Required for Angular Reactive Forms
    ScrollRevealDirective // Applies scroll-reveal animation effects
  ],
  templateUrl: './ai-api-section.html',
  styleUrls: ['./ai-api-section.scss']
})
export class AiApiSectionComponent implements OnInit {
  promptForm: FormGroup; // Reactive form group for the prompt input
  apiResponse: string | null = null; // Stores the successful AI response text
  isLoading = false; // Indicates if an API request is in progress
  error: string | null = null; // Stores any error messages from the API call

  constructor(
    private fb: FormBuilder, // Injects FormBuilder for form creation
    private promptService: PromptService // Injects PromptService for API interaction
  ) {
    // Initializes the prompt form with a single 'prompt' control and a required validator.
    this.promptForm = this.fb.group({
      prompt: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Lifecycle hook for component initialization tasks.
  }

  /**
   * Handles the form submission event.
   * Sends the prompt text to the PromptService and manages loading/response/error states.
   */
  onSubmit(): void {
    if (this.promptForm.invalid) {
      return; // Prevent submission if the form is invalid
    }

    this.isLoading = true; // Set loading state
    this.error = null; // Clear previous errors
    this.apiResponse = null; // Clear previous responses

    const promptText = this.promptForm.value.prompt;
    this.promptService.testPrompt(promptText).subscribe({
      next: (res: PromptResponse) => {
        this.apiResponse = res.responseText; // Assign successful response
        this.isLoading = false; // End loading state
      },
      error: (err) => {
        console.error(err); // Log the full error for debugging
        this.error = 'Failed to get a response.'; // Display a user-friendly error message
        this.isLoading = false; // End loading state
      }
    });
  }
}