import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jasmine-matchers',
  templateUrl: './jasmine-matchers.component.html',
  styleUrls: ['./jasmine-matchers.component.scss'],
})
export class JasmineMatchersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  method1(param1: number, param2: string, param3: unknown) {
    console.log(param1, param2, param3);
  }

  method2(param: string) {
    console.log(param);
  }

  method3(data: unknown) {
    console.log(data);
  }
}
