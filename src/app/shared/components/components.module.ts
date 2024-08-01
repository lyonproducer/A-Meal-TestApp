import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderBackComponent } from './header-back/header-back.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

@NgModule({
  declarations: [
    HeaderBackComponent,
    HeaderHomeComponent
  ],
  imports: [ CommonModule, IonicModule ],
  exports: [
    HeaderBackComponent,
    HeaderHomeComponent
  ],
  providers: [],
})
export class ComponentsModule {}