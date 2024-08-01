import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/core/services/meal.service';
import { Category } from 'src/app/shared/interfaces/category.model';
import { CategoryResponse } from '../../shared/interfaces/category.model';
import { UtilsService } from '../../core/services/utils.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  search: string = '';
  categories: Category[] = [];
  
  constructor(
    private mealService: MealService,
    private UtilsService: UtilsService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories () {
    this.UtilsService.presentLoading();

    this.mealService.getMealsCategories().subscribe({
      next: (res: CategoryResponse) => {
        this.categories = res.categories;
        this.UtilsService.closeLoading();
      },
      error: (e)=> {
        this.UtilsService.closeLoading();
      }
    })
  }

  goToMealDetail(category: Category) {

  }

}
