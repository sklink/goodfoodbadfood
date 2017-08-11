/*
 * FoodItemRating
 *
 * Food item ratings reference both the item, it's overall rating, and the
 * nutritional reasons behind the rating.
 *
 */
import { FoodItem } from './food-item';
import { NutritionReason } from './nutrition-reason';

export interface FoodItemRating {
  item: FoodItem,
  avgRating: number,
  reasons: NutritionReason[]
}
