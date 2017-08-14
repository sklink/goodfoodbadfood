// Sort types
export const SORT_TYPE_HASH = {
  NAME: 'name',
  GRADE: 'grade'
};
export const SORT_TYPE_LIST = [
  SORT_TYPE_HASH.NAME, SORT_TYPE_HASH.GRADE
];

// Group types
export const GROUP_TYPE_HASH = {
  RESTRICTION: 'restriction',
  TYPE: 'type'
};
export const GROUP_TYPE_LIST = [
  GROUP_TYPE_HASH.RESTRICTION, GROUP_TYPE_HASH.TYPE
];

// Restriction types
export const RESTRICTION_TYPE_HASH = {
  FAT: 'Fat',
  CARBS: 'Carbohydrates',
  SODIUM: 'Sodium',
  NONE: 'None'
};
export const RESTRICTION_TYPE_LIST = [
  RESTRICTION_TYPE_HASH.FAT, RESTRICTION_TYPE_HASH.SODIUM, RESTRICTION_TYPE_HASH.CARBS
];

// Food types
export const FOOD_TYPE_HASH = {
  MEALS: 'Meals',
  GROCERIES: 'Groceries'
};

// Grades
export const GRADES = {
  A_PLUS: {
    label: 'A+',
    class: 'A_plus'
  },
  A: {
    label: 'A',
    class: 'A'
  },
  B_PLUS: {
    label: 'B+',
    class: 'B_plus'
  },
  B: {
    label: 'B',
    class: 'B'
  },
  C_PLUS: {
    label: 'C+',
    class: 'C_plus'
  },
  C: {
    label: 'C',
    class: 'C'
  },
  D_PLUS: {
    label: 'D+',
    class: 'D_plus'
  },
  D: {
    label: 'D',
    class: 'D'
  },
  F: {
    label: 'F',
    class: 'F'
  }
}
