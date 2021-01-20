import {Component, OnInit} from '@angular/core';
import {cars} from '../../CarsComponent/Cars';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent {
  cars = cars;
}
