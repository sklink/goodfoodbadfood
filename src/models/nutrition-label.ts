/*
 * NutritionalLabel
 *
 * Nutritional label provides the details needed to determine the nutritional
 * value of the food.
 *
 * NOTE: serving size isn't always appropriate and can be used later on to
 * suggest smaller portions of food that otherwise fit within their restrictions
 *
 * servingSize - a string giving the full measurement representation; i.e. '30g'
 *
 */
import { NutritionFact } from './nutrition-fact';

export interface NutritionLabel {
  servingSize: string,
  nutritionFacts: NutritionFact[]
}
