/*
 * NutritionFact
 *
 * Single line from a nutritional label.
 */
import { NutritionType } from './nutrition-type';

export interface NutritionFact {
  amountPerServing: number,
  type: NutritionType
}
