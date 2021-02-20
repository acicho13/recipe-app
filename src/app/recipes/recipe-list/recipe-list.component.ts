import { Component, OnInit } from "@angular/core";
import { IRecipe } from "../recipe";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"],
})
export class RecipeListComponent implements OnInit {
  errorMessage: string;
  recipes: IRecipe[] = [];

  message: string;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
      },
      error: (err) => (this.errorMessage = err),
    });
    this.recipeService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  storeData(id) {
    console.log("click");
    console.log(id);
    console.log(this.recipes[id]);
    return this.recipes[id];
  }
}
