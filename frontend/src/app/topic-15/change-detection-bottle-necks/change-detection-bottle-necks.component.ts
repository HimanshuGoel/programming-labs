import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-bottle-necks',
  templateUrl: './change-detection-bottle-necks.component.html',
  styleUrls: ['./change-detection-bottle-necks.component.scss'],
})
export class ChangeDetectionBottleNecksComponent implements OnInit {
  numbers: number[] = [];
  constructor() {}
  ngOnInit(): void {
    this.generateNumbers();

    console.log(
      'open the chrome console dev tools and type ng.profiler.timeChangeDetection() in console.'
    );
  }

  generateNumbers(): void {
    for (let i = 0; i < 5000; i++) {
      let number = Math.random();
      this.numbers.push(number);
    }
  }
}
