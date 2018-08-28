import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import {BsDatepickerModule, TooltipModule} from 'ngx-bootstrap';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';

@NgModule({
  imports: [
    SharedModule, TooltipModule.forRoot(), BsDatepickerModule.forRoot()
  ],
  declarations: [HomeComponent, VehicleDetailsComponent, PersonalDetailsComponent]
})
export class SiModule {
}
