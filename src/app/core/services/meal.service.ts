import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesResponse } from 'src/app/shared/interfaces/category.model';
import { MealsResponse } from 'src/app/shared/interfaces/meal.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealsSearchUri = 'search.php';
  private mealCategoriesUri = 'categories.php';
  private mealsByCategoryUri = 'filter.php';


  constructor(private http: HttpClient) { }


  getMealsByName(name: string)  {
    let params = new HttpParams();
    if(name) {
      params = params.append('s', name);
    }
    return this.http.get<MealsResponse>(`${environment.apiUrl}/${this.mealsSearchUri}`, { params });
  }

  getMealCategories() {
    return this.http.get<CategoriesResponse>(`${environment.apiUrl}/${this.mealCategoriesUri}`);
  }

  getMealsByCategory(categoryName: string) {
    let params = new HttpParams();
    if(categoryName) {
      params = params.append('c', categoryName);
    }
    return this.http.get<MealsResponse>(`${environment.apiUrl}/${this.mealsByCategoryUri}`, { params });
  }
}
