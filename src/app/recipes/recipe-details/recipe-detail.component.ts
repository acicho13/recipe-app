import { Component, OnInit } from "@angular/core";
import { IRecipe } from "../recipe";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  pageTitle: string = "Recipe Detail";
  id: number;
  name: string;
  ingredients: any;
  directions: any;
  errorMessage: string;
  recipe: IRecipe[] = [];

  message: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id");
    //this.pageTitle += `: ${id}`;
    this.recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipe = recipes;
        this.name = this.recipe[this.id].name;
        this.ingredients = this.recipe[this.id].ingredients;
        this.directions = this.recipe[this.id].directions;
      },
      error: (err) => (this.errorMessage = err),
    });
    this.recipeService.currentMessage.subscribe(
      (message) => (this.message = message)
    );

  }
  newMessage() {
    this.recipeService.changeMessage("Hello from Sibiling");
  }
}


