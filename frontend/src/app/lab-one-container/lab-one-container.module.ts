import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabOneContainerComponent } from './lab-one-container.component';
import { LabOneContainerRoutingModule } from './lab-one-container-routing.module';
import { Topic1Component } from './topic1/topic1.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LabOneContainerComponent, Topic1Component],
  imports: [
    CommonModule,
    LabOneContainerRoutingModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule
  ],
})
export class LabOneContainerModule {}
