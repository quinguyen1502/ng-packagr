import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AngularComponent],
  exports: [AngularComponent],
})
export class AngularModule {}
