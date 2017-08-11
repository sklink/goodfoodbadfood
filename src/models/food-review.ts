/*
 * FoodReview
 *
 * Food review contains overall evaluation information for a set of food and
 * their ratings (FoodItemRatings)
 *
 */
import { FoodItemRating } from './food-item-rating';

export interface FoodReview {
  grade: string;
  avgRating: number;
  foodRatings: FoodItemRating[]
}
