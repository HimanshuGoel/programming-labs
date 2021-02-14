import {
  Component,
  inject,
  Inject,
  InjectFlags,
  InjectionToken,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs/operators';

import { filterNil } from '@datorama/akita';

import { ThemeService } from '../theme.service';

import { untilDestroyed } from '@ngneat/until-destroy';

const WINDOW = new InjectionToken<Window>('A reference to the window object', {
  factory: () => window,
});

export type TimespanProvider = Observable<string>;
export const TIMESPAN = new InjectionToken(
  'Subscribe to timespan query param',
  {
    factory() {
      const activatedRoute = inject(ActivatedRoute);

      return activatedRoute.queryParams.pipe(
        pluck('timespan'),
        // TODO: need to check proper fix for using filterNil() operator
        // filterNil(),
        distinctUntilChanged()
      );
    },
  }
);

const MY_PROVIDER = new InjectionToken('', {
  factory: () => {
    const optional = inject(ActivatedRoute, InjectFlags.Optional);

    const fallback = {};
    return optional ?? fallback;
  },
});

export type ActiveThemeProvider = Observable<string>;
export const ACTIVE_THEME = new InjectionToken<ActiveThemeProvider>(
  'Active theme',
  {
    factory() {
      return inject(ThemeService).theme$;
    },
  }
);

@Component({
  selector: 'app-injection-token-factory',
  templateUrl: './injection-token-factory.component.html',
  styleUrls: ['./injection-token-factory.component.scss'],
})
export class InjectionTokenFactoryComponent implements OnInit {
  constructor(
    @Inject(WINDOW) window: Window,
    @Inject(TIMESPAN) private timespan$: TimespanProvider,
    @Inject(ACTIVE_THEME) public theme$: ActiveThemeProvider
  ) {}

  ngOnInit(): void {
    console.log(window);
    this.timespan$.pipe(untilDestroyed(this)).subscribe(console.log);
  }
}
