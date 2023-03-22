import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test desc', 'https://static.streetkitchen.hu/test/uploads/2015/03/img_5782-1618x855.jpg'),
  ]

  constructor() {
  }

  ngOnInit(): void {

  }

}
