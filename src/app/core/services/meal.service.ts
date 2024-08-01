import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryResponse } from 'src/app/shared/interfaces/category.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealsSearchUri = 'search.php';
  private mealsCategoryUri = 'categories.php';


  constructor(private http: HttpClient) { }


  getMealsByName(name: string)  {

  }

  getMealsCategies() {
    return this.http.get<CategoryResponse>(`${environment.apiUrl}/${this.mealsCategoryUri}`);
  }
}
