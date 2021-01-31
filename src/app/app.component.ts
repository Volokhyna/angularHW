import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = new FormControl('', [Validators.required, Validators.minLength(4), this.wordsValidator]);
  phone = new FormControl('', [Validators.required, Validators.minLength(13)]);
  myForm = new FormGroup({
    name: this.name,
    phone: this.phone,
    }
  );

  wordsValidator(inputData: AbstractControl): any {
    if (inputData.value.includes('fuck')) {
      return {error: true, msg: 'This word is not allowed'};
    }
    return null;
  }

  showUser(): void {
    console.log([this.name.value, this.phone.value]);
  }
}
