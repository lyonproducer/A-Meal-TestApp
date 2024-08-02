import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/core/services/meal.service';
import { Meal, MealsResponse } from 'src/app/shared/interfaces/meal.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  name = '';
  type = '';
  isLoadingMeals = false;
  meals: Meal[] = [];

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['name'] && params['type']){//log the entire params objectlog the value of id
        this.name = params['name'];
        this.type = params['type'];

        if(this.type === 'CATEGORY') {
          this.getMealsByCategory();
        } 

        if(this.type === 'SEARCH') {
          this.getMealsBySearch();
        } 
      }
    });
  }

  getMealsByCategory() {
    this.isLoadingMeals = true;
    this.mealService.getMealsByCategory(this.name).subscribe({
      next: (res: MealsResponse) => {
        if(res.meals) {
          this.meals = res.meals;
        }
        this.isLoadingMeals = false;
      },
      error: (e)=> {
        this.isLoadingMeals = false;
      }
    }) 
  }

  getMealsBySearch() {
    this.isLoadingMeals = true;
    this.mealService.getMealsByName(this.name).subscribe({
      next: (res: MealsResponse) => {
        if(res.meals) {
          this.meals = res.meals;
        }
        this.isLoadingMeals = false;
      },
      error: (e)=> {
        this.isLoadingMeals = false;
      }
    }) 
  }

  goToMealDetail(meal: Meal) {
    this.router.navigate(['details', meal.idMeal]);
  }

}
