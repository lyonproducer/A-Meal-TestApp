import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/core/services/meal.service';
import { Meal, MealsResponse } from 'src/app/shared/interfaces/meal.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categoryName = '';
  isLoadingMeals = false;
  meals: Meal[] = [];

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['categoryName']){
        console.log(params) //log the entire params object
        console.log(params['categoryName']) //log the value of id
        this.categoryName=params['categoryName'];
        setTimeout(() => {
          this.getMealsByCategory();
        }, 500);
      }
    });
  }

  getMealsByCategory() {
    this.isLoadingMeals = true;
    this.mealService.getMealsByCategory(this.categoryName).subscribe({
      next: (res: MealsResponse) => {
        this.meals = res.meals;
        this.isLoadingMeals = false;
      },
      error: (e)=> {
        this.isLoadingMeals = false;
      }
    }) 
  }

  goToMealDetail(meal: Meal) {
    this.router.navigate(['details', meal.strMeal]);
  }

}
