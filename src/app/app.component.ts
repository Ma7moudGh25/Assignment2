import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodService } from './food.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [ HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'Assignment2';
  
  
}
