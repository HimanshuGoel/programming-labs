import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-converter',
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.scss'],
})
export class UnitConverterComponent implements OnInit {
  title = 'unit-conversion';
  public km = 0;
  constructor() {}

  ngOnInit(): void {}
}
