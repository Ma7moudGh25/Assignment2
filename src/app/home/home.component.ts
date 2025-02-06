import { Component, inject, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { RouterLink } from '@angular/router';
import { Food } from '../food';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Food[] = [];

  constructor(private apiService: FoodService) {}

  fetchProducts(category:string) {
    this.apiService.getFood(category).subscribe(
      (data) => {
        this.products = data.meals;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  ngOnInit():void{
    this.fetchProducts("");
  }
}
