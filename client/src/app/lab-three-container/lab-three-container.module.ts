import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabThreeContainerComponent } from './lab-three-container.component';
import { LabThreeContainerRoutingModule } from './lab-three-container-routing.module';



@NgModule({
  declarations: [LabThreeContainerComponent],
  imports: [
    CommonModule,
    LabThreeContainerRoutingModule
  ]
})
export class LabThreeContainerModule { }
