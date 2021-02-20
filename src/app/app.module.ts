import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-details/recipe-detail.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, RecipeListComponent, RecipeDetailComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot([
      { path: "recipes", component: RecipeListComponent },
      { path: "recipes/:id", component: RecipeDetailComponent },
      { path: "", redirectTo: "recipes", pathMatch: "full" },
      { path: "*", redirectTo: "recipes", pathMatch: "full" },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
