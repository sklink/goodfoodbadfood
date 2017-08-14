interface IRestrictions {
  Fat?: number,
  Carbohydrates?: number,
  Sodium?: number
}

export interface IFoodItem {
  name: string,
  restrictions: IRestrictions,
  type: string
}

export interface IGrade {
  class: string,
  label: string
}
