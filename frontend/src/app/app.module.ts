import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    InjectionTokenFactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
