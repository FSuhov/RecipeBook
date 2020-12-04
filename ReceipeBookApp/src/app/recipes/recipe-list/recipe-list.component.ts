import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is simply a test', 'https://i.pinimg.com/136x136/16/e4/c8/16e4c8c4352461136112b76d2378af88.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
