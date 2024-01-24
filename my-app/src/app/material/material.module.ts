import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatSliderModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[
    MatDialogModule,
    MatSliderModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
