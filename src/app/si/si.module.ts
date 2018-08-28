import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import {TooltipModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    SharedModule, TooltipModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class SiModule { }
