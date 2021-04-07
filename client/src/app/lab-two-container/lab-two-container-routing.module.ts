import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabTwoContainerComponent } from './lab-two-container.component';

const routes: Routes = [{ path: '', component: LabTwoContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabTwoContainerRoutingModule {}
