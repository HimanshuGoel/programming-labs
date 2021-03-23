import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfExampleComponent } from './topic-1/ng-if-example/ng-if-example.component';
import { TypedSimpleChangesComponent } from './topic-2/typed-simple-changes/typed-simple-changes.component';
import { BindingCssVariableComponent } from './topic-3/binding-css-variable/binding-css-variable.component';
import { CountdownTimerComponent } from './topic-4/countdown-timer/countdown-timer.component';
import { JasmineMatchersComponent } from './topic-5/jasmine-matchers/jasmine-matchers.component';
import { GhostTableAnimationComponent } from './topic-6/ghost-table-animation/ghost-table-animation.component';
import { HotToastComponent } from './topic-7/hot-toast/hot-toast.component';
import { IterateStringEnumComponent } from './topic-8/iterate-string-enum/iterate-string-enum.component';
import { UnitConverterPipe } from './topic-9/unit-converter.pipe';
import { UnitConverterComponent } from './topic-9/unit-converter/unit-converter.component';
import { InjectionTokenFactoryComponent } from './topic-10/injection-token-factory/injection-token-factory.component';
import { AutofocusDirective } from './topic-11/autofocus.directive';
import { AutofocusComponent } from './topic-11/autofocus/autofocus.component';
import { GanttChartComponent } from './topic-12/gantt-chart/gantt-chart.component';
import { LoadOffComponent } from './topic-14/load-off/load-off.component';
import { SubscribeModule } from '@ngneat/subscribe';
import { ChangeDetectionBottleNecksComponent } from './topic-15/change-detection-bottle-necks/change-detection-bottle-necks.component';
import { AbsolutePathsComponent } from './topic-16/absolute-paths/absolute-paths.component';
import { PreventSubscriptionMemoryLeaksComponent } from './topic-17/prevent-subscription-memory-leaks/prevent-subscription-memory-leaks.component';
@NgModule({
  declarations: [
    AppComponent,
    NgIfExampleComponent,
    TypedSimpleChangesComponent,
    BindingCssVariableComponent,
    CountdownTimerComponent,
    JasmineMatchersComponent,
    GhostTableAnimationComponent,
    HotToastComponent,
    IterateStringEnumComponent,
    UnitConverterPipe,
    UnitConverterComponent,
    InjectionTokenFactoryComponent,
    AutofocusDirective,
    AutofocusComponent,
    GanttChartComponent,
    LoadOffComponent,
    ChangeDetectionBottleNecksComponent,
    AbsolutePathsComponent,
    PreventSubscriptionMemoryLeaksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SubscribeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
