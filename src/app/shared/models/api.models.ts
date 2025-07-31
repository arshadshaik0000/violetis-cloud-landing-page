/**
 * Defines the structure for a request body when sending a prompt to the AI API.
 */
export interface PromptRequest {
  promptText: string; // The text prompt to be sent to the AI service.
}

/**
 * Defines the structure for a successful response from the AI API.
 */
export interface PromptResponse {
  result: string; // The AI-generated response text or result.
}

/**
 * Defines the structure for a single pricing plan.
 */
export interface PricingPlan {
  id: string; // Unique identifier for the pricing plan.
  name: string; // The name of the pricing plan (e.g., "Basic", "Pro").
  price: number; // The price of the plan.
  features: string[]; // A list of features included in the plan.
}