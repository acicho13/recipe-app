export interface IRecipe {
  id: number;
  name: string;
  img: string;
  starRating: number;
  ingredients: Array<string>;
  directions: Array<string>;
}
