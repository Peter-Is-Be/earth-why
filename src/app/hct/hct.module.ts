import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HctRoutingModule } from './hct-routing.module';
import { HctIndexComponent } from './hct-index/hct-index.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorCopyComponent } from './color-copy/color-copy.component';

@NgModule({
  declarations: [
    HctIndexComponent,
    HctIndexComponent,
    ColorCopyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ClipboardModule,
    MatSnackBarModule,
    HctRoutingModule,
    ColorPickerModule
  ]
})
export class HctModule { }
