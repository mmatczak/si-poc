import {Routes} from '@angular/router';
import {HomeComponent} from '../../si/components/home/home.component';
import {VehicleDetailsComponent} from '../../si/components/vehicle-details/vehicle-details.component';
import {PersonalDetailsComponent} from '../../si/components/personal-details/personal-details.component';

export const DEFAULT_LANG = 'de';
export const DEFAULT_BRAND = 'vw';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      {
        path: ':brand',
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'vehicle-details',
            component: VehicleDetailsComponent
          },
          {
            path: 'personal-details',
            component: PersonalDetailsComponent
          }
        ]
      }
    ]
  },
  {path: '', redirectTo: `/${DEFAULT_LANG}/${DEFAULT_BRAND}/vehicle-details`, pathMatch: 'full'}
];
