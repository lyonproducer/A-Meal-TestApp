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
  meal!: Meal;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['mealName']){
        console.log(params) //log the entire params object
        console.log(params['mealName']) //log the value of id
        this.mealName=params['mealName'];
        setTimeout(() => {
          this.getMeal();
        }, 500);
      }
    });
  }

  getMeal() {
    this.isLoadingMealDetail = true;
    this.mealService.getMealsByName(this.mealName).subscribe({
      next: (res: MealsResponse) => {
        this.meal = res.meals[0];
        this.isLoadingMealDetail = false;
        console.log('res ', this.meal);
      },
      error: (e)=> {
        this.isLoadingMealDetail = false;
      }
    }) 
  }
}
