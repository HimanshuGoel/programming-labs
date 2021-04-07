import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabOneContainerComponent } from '../lab-one-container/lab-one-container.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ChildOneComponent } from './breadcrumbs/child-one/child-one.component';
import { ChildThreeComponent } from './breadcrumbs/child-three/child-three.component';
import { ChildTwoComponent } from './breadcrumbs/child-two/child-two.component';

const routes: Routes = [
  {
    path: '',
    component: LabOneContainerComponent,
    children: [
      { path: '', redirectTo: 'topic1', pathMatch: 'full' },
      {
        path: 'topic1',
        component: BreadcrumbsComponent,
        data: { breadcrumb: { alias: 'Parent' } },
        children: [
          {
            path: 'child-one',
            component: ChildOneComponent,
            data: { breadcrumb: { alias: 'ChildOne' } },
            children: [
              {
                path: 'child-two',
                component: ChildTwoComponent,
                data: { breadcrumb: { alias: 'ChildTwo' } },
              },
              {
                path: 'child-three',
                component: ChildThreeComponent,
                data: { breadcrumb: { alias: 'ChildThree' } },
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabOneContainerRoutingModule {}
