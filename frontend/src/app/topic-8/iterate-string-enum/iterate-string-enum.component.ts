import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterate-string-enum',
  templateUrl: './iterate-string-enum.component.html',
  styleUrls: ['./iterate-string-enum.component.scss'],
})
export class IterateStringEnumComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.iteratingOverValues();
    this.iteratingOverKeys();
  }

  private iteratingOverValues() {
    Object.values(ActionState).forEach((value) => {
      console.log(value);
    });

    for (const value of Object.values(ActionState)) {
      console.log(value);
    }
  }

  private iteratingOverKeys() {
    for (const key of Object.keys(ActionState)) {
      console.log(key);
    }

    Object.keys(ActionState).forEach((key) => {
      console.log(key);
    });
  }
}

export enum ActionState {
  todo = 'To do',
  inProgress = 'In progress',
  done = 'Done',
}
