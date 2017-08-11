/*
 * FoodItem
 *
 * Food item contains all information relevant to displaying and evaluating
 * it's nutritional value.
 *
 */
import { NutritionLabel } from './nutrition-label';

export interface FoodItem {
  name: string;
  image: string;
  nutritionInfo?: NutritionLabel;
}
