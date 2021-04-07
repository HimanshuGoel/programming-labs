import { Component, OnInit } from '@angular/core';

import { loadingFor } from '@ngneat/loadoff';

import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-load-off',
  templateUrl: './load-off.component.html',
  styleUrls: ['./load-off.component.scss'],
})
export class LoadOffComponent implements OnInit {
  loader = loadingFor('add', 'edit', 'delete');

  constructor(public http: HttpClient) {}

  users$!: Observable<AsyncState<Users>>;

  ngOnInit() {
    this.users$ = this.http.get<Users>('/users').pipe(toAsyncState());
  }

  add() {
    this.http.post('', {}).pipe(this.loader.add.track()).subscribe();
  }

  edit() {
    this.http.post('', {}).pipe(this.loader.edit.track()).subscribe();
  }

  delete() {
    this.http.delete('', {}).pipe(this.loader.delete.track()).subscribe();
  }
}

interface Users {
  userId: string;
}
