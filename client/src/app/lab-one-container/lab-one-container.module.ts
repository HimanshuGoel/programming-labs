import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabOneContainerComponent } from './lab-one-container.component';
import { LabOneContainerRoutingModule } from './lab-one-container-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ChildOneComponent } from './breadcrumbs/child-one/child-one.component';
import { ChildTwoComponent } from './breadcrumbs/child-two/child-two.component';
import { ChildThreeComponent } from './breadcrumbs/child-three/child-three.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
@NgModule({
  declarations: [LabOneContainerComponent, BreadcrumbsComponent, ChildOneComponent, ChildTwoComponent, ChildThreeComponent],
  imports: [
    CommonModule,
    LabOneContainerRoutingModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    BreadcrumbModule
  ],
})
export class LabOneContainerModule {}
