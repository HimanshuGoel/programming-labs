import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-prevent-subscription-memory-leaks',
  templateUrl: './prevent-subscription-memory-leaks.component.html',
  styleUrls: ['./prevent-subscription-memory-leaks.component.scss'],
})
export class PreventSubscriptionMemoryLeaksComponent {
  @Input() searchFilter: string | undefined;

  myData: any;
  ngDestroy$ = new Subject();

  constructor(private httpClient: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchFilter) {
      this.loadData();
    }
  }
  ngOnDestroy() {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
  private loadData() {
    // cancel previous requests
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
    this.ngDestroy$ = new Subject();

    this.httpClient
      .get('/api/my-data?search=' + this.searchFilter)
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((data: any) => {
        this.myData = data;
      });
  }
}
