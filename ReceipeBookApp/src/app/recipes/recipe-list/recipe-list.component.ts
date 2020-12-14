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
    new Recipe('Test recipe 1', 'This is simply a test', 'https://i.pinimg.com/136x136/16/e4/c8/16e4c8c4352461136112b76d2378af88.jpg'),
    new Recipe('Test recipe 2', 'This is simply a test', 'https://i.pinimg.com/136x136/16/e4/c8/16e4c8c4352461136112b76d2378af88.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(item: Recipe){
    this.recipeSelectedInRecipeItem.emit(item);
  }

}
