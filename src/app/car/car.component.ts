import {Component, Input} from '@angular/core';
import {CarInterface} from '../Inerface/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {
  @Input()
  car: CarInterface;
}

