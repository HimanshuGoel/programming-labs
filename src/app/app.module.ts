import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfExampleComponent } from './topic-1/ng-if-example/ng-if-example.component';
import { TypedSimpleChangesComponent } from './topic-2/typed-simple-changes/typed-simple-changes.component';
import { BindingCssVariableComponent } from './topic-3/binding-css-variable/binding-css-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfExampleComponent,
    TypedSimpleChangesComponent,
    BindingCssVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
