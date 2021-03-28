import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabOneContainerComponent } from '../lab-one-container/lab-one-container.component';

const routes: Routes = [{
    path: '',
    component: LabOneContainerComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabOneContainerRoutingModule { }
