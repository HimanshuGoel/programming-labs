import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.scss'],
})
export class NgIfExampleComponent implements OnInit {
  public condition: boolean = false;
  public userObservable$ = of({ first: 'HG', last: 'GH' });

  constructor() {}

  ngOnInit(): void {
    this.condition = true;
  }
}
