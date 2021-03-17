import { Component, OnInit } from '@angular/core';

import { loaderFor } from '@ngneat/loadoff';

import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-load-off',
  templateUrl: './load-off.component.html',
  styleUrls: ['./load-off.component.scss'],
})
export class LoadOffComponent implements OnInit {
  loader = loaderFor('add', 'edit', 'delete');

  constructor() {}

  users$: Observable<AsyncState<Users>>;

  ngOnInit() {
    this.users$ = this.http.get<Users>('/users').pipe(
      toAsyncState()
    );
  }

  add() {
    this.service.add().pipe(this.loader.add.track()).subscribe();
  }

  edit() {
    this.service.add().pipe(this.loader.edit.track()).subscribe();
  }

  delete() {
    this.service.add().pipe(this.loader.delete.track()).subscribe();
  }
}
