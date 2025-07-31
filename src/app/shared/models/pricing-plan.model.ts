/**
 * Defines the structure for a pricing plan displayed on the website.
 */
export interface PricingPlan {
  name: string; // The name of the pricing plan (e.g., "Basic", "Pro").
  price: number; // The numerical price of the plan.
  perUserLabel?: string; // Optional: Label indicating pricing basis, e.g., "/ user".
  features: string[]; // A list of features included in the plan.
  featured?: boolean; // Optional: Indicates if this plan should be highlighted as a featured option.
}