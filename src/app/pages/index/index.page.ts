import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/core/services/meal.service';
import { Category } from 'src/app/shared/interfaces/category.model';
import { CategoriesResponse } from '../../shared/interfaces/category.model';
import { UtilsService } from '../../core/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  search: string = '';
  categories: Category[] = [];
  isLoadingCategories = false;
  
  constructor(
    private mealService: MealService,
    private utilsService: UtilsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories () {
    this.isLoadingCategories = true;
    this.mealService.getMealCategories().subscribe({
      next: (res: CategoriesResponse) => {
        this.categories = res.categories;
        this.isLoadingCategories = false;
      },
      error: (e)=> {
        this.isLoadingCategories = false;
      }
    })
  }

  goToMealDetail(category: Category) {
    this.router.navigate(['category', category.strCategory]);
  }

}
