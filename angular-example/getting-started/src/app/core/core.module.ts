import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileService } from './services/file/file.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ FileService ]
})
export class CoreModule { }
