import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabOneContainerComponent } from './lab-one-container.component';
import { LabOneContainerRoutingModule } from './lab-two-container-routing.module';

@NgModule({
  declarations: [LabOneContainerComponent],
  imports: [
    CommonModule,
    LabOneContainerRoutingModule
  ]
})
export class LabOneContainerModule { }
