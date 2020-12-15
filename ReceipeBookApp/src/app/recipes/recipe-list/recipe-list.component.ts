import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInRecipeItem = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe 1', 'This is simply a test', 'assets/images/single5.jpg'),
    new Recipe('Test recipe 2', 'This is simply a test', 'assets/images/single5.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(item: Recipe) {
    this.recipeSelectedInRecipeItem.emit(item);
  }

}
