/*
 * NutritionReason
 *
 * Nutrition reason highlights a nutrition fact from the label as either a
 * conflict or synergy with the current nutritional restrictions.
 *
 */
import { NutritionFact } from './nutrition-fact';

export interface NutritionReason {
  rating: number,
  reason: string,
  nutritionFact: NutritionFact
};
