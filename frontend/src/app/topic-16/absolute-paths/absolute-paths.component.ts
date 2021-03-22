import { Component, OnInit } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-absolute-paths',
  templateUrl: './absolute-paths.component.html',
  styleUrls: ['./absolute-paths.component.scss'],
})
export class AbsolutePathsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(environment.production);
  }
}
