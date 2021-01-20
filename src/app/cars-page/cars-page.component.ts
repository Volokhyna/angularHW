import {Component} from '@angular/core';
import {cars} from '../../CarsComponent/Cars';
import {CarInterface} from '../InerfaceCars/car.interface';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent {
  cars: CarInterface[] = cars;
}
