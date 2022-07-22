import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

const MaterialComponents = [MatButtonModule, MatIconModule, MatCheckboxModule];

@NgModule({
  exports: [MaterialComponents],
})
export class MaterialModule {}
