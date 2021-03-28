import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new Subject<string>();
  theme$ = this.theme.asObservable();
  constructor() {}

  setTheme(theme: string) {
    this.theme.next(theme);
  }
}
