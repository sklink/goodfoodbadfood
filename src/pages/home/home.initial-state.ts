import {
  GRADES,
  SORT_TYPE_HASH,
  GROUP_TYPE_HASH,
  RESTRICTION_TYPE_HASH,
  FOOD_TYPE_HASH
} from './home.constants';

const GROCERIES = FOOD_TYPE_HASH.GROCERIES;
const MEALS = FOOD_TYPE_HASH.MEALS;

/*
 * TODO: We need two initial data sets:
 *   1. Demo set for new users.
 *   2. Empty set while loading from the server.
 *
 * NOTE: Data structure will change once we hvae real nutrition info.
 */
export const INITIAL_STATE_DATA = {
  avgGrade: GRADES.A_PLUS,
  avgRating: 5,
  filters: {
    restrictions: [RESTRICTION_TYPE_HASH.CARBS, RESTRICTION_TYPE_HASH.SODIUM],
    types: [MEALS, GROCERIES],
    sortBy: SORT_TYPE_HASH.GRADE,
    groupBy: GROUP_TYPE_HASH.RESTRICTION
  },
  filteredItems: [],
  items: {
    'all': [
      { name: 'Chicken Alfredo', restrictions: { Fat: 4, Carbohydrates: 4 }, type: MEALS },
      { name: 'Spaghetti Marinara', restrictions: { Carbohydrates: 4 }, type: MEALS },
      { name: 'Thai Basil Chicken', restrictions: { Sodium: 3 }, type: MEALS },
      { name: 'Chorizo-stuffed Chicken', restrictions: { Fat: 1, Sodium: 1 }, type: MEALS },
      { name: 'Thai Green Curry', restrictions: { Fat: 4, Sodium: 5 }, type: MEALS },
      { name: 'Shrimp Fried Rice', restrictions: { Sodium: 2 }, type: MEALS },
      { name: 'Pizza', restrictions: { Fat: 3, Sodium: 1, Carbohydrates: 4 }, type: MEALS },
      { name: 'Thai Lemon Beef', restrictions: { Sodium: 3 }, type: MEALS },
      { name: 'Cajun Blackened Salmon', restrictions: { Fat: 5 }, type: MEALS },
      { name: 'Beef with Broccoli', restrictions: { Fat: 1, Sodium: 4 }, type: MEALS },
      { name: 'Baked Ziti', restrictions: { Fat: 3, Carbohydrates: 2 }, type: MEALS },
      { name: 'Shrimp Pad Thai', restrictions: { Sodium: 3 }, type: MEALS },
      { name: 'Chicken Tacos', type: MEALS },
      { name: 'Skillet Sweet Potatoes', type: MEALS },
      { name: 'Honey Banana Muffins', restrictions: { Carbohydrates: 2 }, type: MEALS },
      { name: 'Italian Lentil Soup', restrictions: { Sodium: 4 }, type: MEALS },
      { name: 'Steak Bites', restrictions: { Fat: 2, Sodium: 2 }, type: MEALS },
      { name: 'Baked Chicken Breasts', restrictions: { Sodium: 2 }, type: MEALS },

      // Groceries
      { name: 'Coca-Cola', restrictions: { Carbohydrates: 5 }, type: GROCERIES },
      { name: 'Orange Juice', restrictions: { Carbohydrates: 4 }, type: GROCERIES },
      { name: 'Kit-Kat Chocolate Bar', restrictions: { Carbohydrates: 5 }, type: GROCERIES },
      { name: 'Bananas', restrictions: { Carbohydrates: 1 }, type: GROCERIES },
      { name: 'Apples', restrictions: { Carbohydrates: 1 }, type: GROCERIES },
      { name: 'Carrots', type: GROCERIES },
      { name: 'Broccoli', type: GROCERIES },
      { name: 'Rye Bread', restrictions: { Carbohydrates: 3 }, type: GROCERIES },
      { name: 'Milk', type: GROCERIES },
      { name: 'Cheddar Cheese', restrictions: { Sodium: 3, Fat: 4 }, type: GROCERIES },
      { name: 'Corn', restrictions: { Carbohydrates: 3, Fat: 2 }, type: GROCERIES },
      { name: 'White Rice', restrictions: { Carbohydrates: 2 }, type: GROCERIES },
      { name: 'Tomato Sauce', restriction: { Sodium: 2 }, type: GROCERIES },
      { name: 'Ham', restrictions: { Sodium: 5, Fat: 2 }, type: GROCERIES },
      { name: 'Pepperoni', restrictions: { Sodium: 5, Fat: 4 }, type: GROCERIES },
      { name: 'Chicken', type: GROCERIES },
      { name: 'Ground Beef', restrictions: { Fat: 4 }, type: GROCERIES },
      { name: 'Flour', restrictions: { Carbohydrates: 3 }, type: GROCERIES },
      { name: 'Ketchup', restrictions: { Sodium: 3, Carbohydrates: 1 }, type: GROCERIES },
      { name: 'Mustard', restrictions: { Sodium: 3 }, type: GROCERIES },
      { name: 'Soy Sauce', restrictions: { Sodium: 5 }, type: GROCERIES },
      { name: 'Sugar', restrictions: { Carbohydrates: 5 }, type: GROCERIES },
      { name: 'Coffee', type: GROCERIES },
      { name: 'Green Tea', type: GROCERIES },
      { name: 'Celery', type: GROCERIES },
      { name: 'Spaghetti', restrictions: { Carbohydrates: 3 }, type: GROCERIES },
      { name: 'Bacon', restrictions: { Sodium: 5, Fat: 5 }, type: GROCERIES },
      { name: 'Eggs', restrictions: { Fat: 2 }, type: GROCERIES },
      { name: 'Potatoes', restrictions: { Carbohydrates: 3 }, type: GROCERIES },
      { name: 'Peanuts', restrictions: { Fat: 4, Carbohydrates: 2 }, type: GROCERIES },
      { name: 'Raspberry Jam', restrictions: { Carbohydrates: 4 }, type: GROCERIES },
      { name: 'Onions', type: GROCERIES },
      { name: 'Grapes', restrictions: { Carbohydrates: 2 }, type: GROCERIES },
      { name: 'Pineapples', restrictions: { Carbohydrates: 3 }, type: GROCERIES },
      { name: 'Bell Peppers', type: GROCERIES },
      { name: 'Parmesean Cheese', restrictions: { Fat: 4, Sodium: 3 }, type: GROCERIES },
      { name: 'Sodium Crackers', restrictions: { Sodium: 3, Carbohydrates: 3 }, type: GROCERIES },
      { name: 'Cheerios', restrictions: { Carbohydrates: 4, Fat: 1 }, type: GROCERIES },
      { name: 'Mini Wheats', restrictions: { Carbohydrates: 2 }, type: GROCERIES },
      { name: 'Beef Jerky', restrictions: { Sodium: 5, Fat: 4 }, type: GROCERIES },
      { name: 'Popcorn', restrictions: { Carbohydrates: 2 }, type: GROCERIES },
      { name: 'Marshmellows', restrictions: { Carbohydrates: 4 }, type: GROCERIES },
      { name: 'Beans', type: GROCERIES },
      { name: 'Cucumber', type: GROCERIES },
      { name: 'Aero Chocolate Bar', restrictions: { Fat: 3, Carbohydrates: 3 }, type: GROCERIES },
      { name: 'Rasins', restrictions: { Carbohydrates: 3 }, type: GROCERIES },
      { name: 'Pringles', restrictions: { Sodium: 3, Carbohydrates: 4, Fat: 2 }, type: GROCERIES },
      { name: 'Garlic', type: GROCERIES },
      { name: 'Olive Oil', restrictions: { Fat: 1 }, type: GROCERIES },
      { name: 'Butter', restrictions: { Fat: 3 }, type: GROCERIES },
      { name: 'Pears', restrictions: { Carbohydrates: 1 }, type: GROCERIES }
    ]
  }
};
