import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabOneContainerComponent } from '../lab-one-container/lab-one-container.component';
import { Topic1Component } from './topic1/topic1.component';

const routes: Routes = [
  {
    path: '',
    component: LabOneContainerComponent,
    children: [{ path: 'topic1', component: Topic1Component }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabOneContainerRoutingModule {}
