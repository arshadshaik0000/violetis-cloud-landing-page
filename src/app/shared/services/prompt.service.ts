import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Defines the structure for a request payload when sending a prompt for testing.
 */
export interface PromptRequest {
  promptText: string; // The text prompt to be sent to the AI service.
}

/**
 * Defines the structure for a successful response from the prompt testing API.
 */
export interface PromptResponse {
  responseText: string; // The AI-generated response text from the prompt.
}

/**
 * PromptService: Handles interactions with the AI prompt testing API.
 * Provides a method to send a prompt and receive a simulated response.
 */
@Injectable({ providedIn: 'root' }) // Makes the service a singleton, available globally.
export class PromptService {
  constructor(private http: HttpClient) {
    // Injects HttpClient for making HTTP requests to the backend.
  }

  /**
   * Sends a test prompt to the API and returns the AI's response.
   * @param prompt The input text prompt for the AI.
   * @returns An Observable that emits a PromptResponse containing the AI's generated text.
   */
  testPrompt(prompt: string): Observable<PromptResponse> {
    return this.http.post<PromptResponse>('/api/prompts/test', { promptText: prompt });
  }
}