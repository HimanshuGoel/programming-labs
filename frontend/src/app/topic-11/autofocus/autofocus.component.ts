import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-autofocus',
  templateUrl: './autofocus.component.html',
  styleUrls: ['./autofocus.component.scss'],
})
export class AutofocusComponent implements OnInit {

  @ViewChild('input', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
