import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabThreeContainerComponent } from '../lab-three-container/lab-three-container.component';

const routes: Routes = [
  {
    path: '',
    component: LabThreeContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabThreeContainerRoutingModule {}
