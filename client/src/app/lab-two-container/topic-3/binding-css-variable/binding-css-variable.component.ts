import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-binding-css-variable',
  templateUrl: './binding-css-variable.component.html',
  styleUrls: ['./binding-css-variable.component.scss'],
})
export class BindingCssVariableComponent implements OnInit {
  color = 'hotpink';

  name = 'Angular ' + VERSION.major;

  items = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
