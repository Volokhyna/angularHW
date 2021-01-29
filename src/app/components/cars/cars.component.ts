import { Component, OnInit } from '@angular/core';
import {cars} from '../../data/cars';
import {CarInterface} from '../../cars-interface/interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: CarInterface[] = cars;

  constructor() { }

  ngOnInit(): void {
  }

}
