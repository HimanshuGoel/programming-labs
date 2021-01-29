import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  constructor() {}

  private subscription!: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Jan 01 2021 00:00:00');

  millieSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: number = 0;
  public secondsToDay: number = 0;
  public minutesToDay: number = 0;
  public hoursToDay: number = 0;
  public daysToDay: number = 0;

  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDay = Math.floor(
      (timeDifference / this.millieSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDay = Math.floor(
      (timeDifference / (this.millieSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDay = Math.floor(
      (timeDifference /
        (this.millieSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDay = Math.floor(
      timeDifference /
        (this.millieSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }

  ngOnInit() {
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
