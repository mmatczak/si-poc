import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [HomeComponent]
})
export class SiModule { }
