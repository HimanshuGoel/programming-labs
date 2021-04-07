import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabThreeContainerComponent } from '../lab-three-container/lab-three-container.component';
import { PathNotFoundComponent } from '../path-not-found/path-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LabThreeContainerComponent, pathMatch: 'full'
  },
  { path: '**', component: PathNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabThreeContainerRoutingModule {}
