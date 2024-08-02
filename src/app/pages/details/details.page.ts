import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/core/services/meal.service';
import { Meal, MealsResponse } from 'src/app/shared/interfaces/meal.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  mealName = '';
  isLoadingMealDetail = false;
  meal?: Meal;
  tags: string[] = [];
  ingredients: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['mealName']){
        console.log(params) //log the entire params object
        this.mealName=params['mealName'];
        this.getMeal();
      }
    });
  }

  getMeal() {
    this.isLoadingMealDetail = true;
    this.mealService.getMealsByName(this.mealName).subscribe({
      next: (res: MealsResponse) => {
        this.isLoadingMealDetail = false;
        if(res?.meals) {
          this.meal = res.meals[0];
          this.tags = this.meal?.strTags?.split(',') ?? [];
          for (let index = 1; index <= 20; index++) {
            if(this.meal[`strIngredient${index}`  as keyof Meal]){
              this.ingredients.push({
                'name': this.meal[`strIngredient${index}`  as keyof Meal],
                'measure': this.meal[`strMeasure${index}` as keyof Meal]
              });
            }
          }
        }
      },
      error: (e)=> {
        this.isLoadingMealDetail = false;
      }
    }) 
  }
}
