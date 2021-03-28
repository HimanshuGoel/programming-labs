import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lab-one',
    loadChildren: () =>
      import('./lab-one-container/lab-one-container.module').then(
        (m) => m.LabOneContainerModule
      ),
  },
  {
    path: 'lab-two',
    loadChildren: () =>
      import('./lab-two-container/lab-two-container.module').then(
        (m) => m.LabTwoContainerModule
      ),
  },
  {
    path: 'lab-three',
    loadChildren: () =>
      import('./lab-three-container/lab-three-container.module').then(
        (m) => m.LabThreeContainerModule
      ),
  },
  { path: '', redirectTo: '/lab-one', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
