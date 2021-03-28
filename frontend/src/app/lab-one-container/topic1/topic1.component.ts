import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.scss'],
})
export class Topic1Component implements OnInit {
  dummyForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.dummyForm = new FormGroup({
      country: new FormControl('country', [Validators.required]),
      county: new FormControl('county', [
        // (c: AbstractControl) =>
        //   this.dummyForm.get('country')!.value === 'B'
        //     ? Validators.required(c)
        //     : null,
        Validators.required,
      ]),
    });
  }

  onCountryChanged() {
    this.dummyForm.get('county')?.updateValueAndValidity();
  }
}
