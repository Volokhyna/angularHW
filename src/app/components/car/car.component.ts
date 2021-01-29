import {Component, Input, OnInit} from '@angular/core';
import {CarInterface} from '../../cars-interface/interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: CarInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
