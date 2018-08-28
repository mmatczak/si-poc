import {Routes} from '@angular/router';
import {HomeComponent} from '../../si/components/home/home.component';

export const DEFAULT_LANG = 'de';
export const DEFAULT_BRAND = 'vw';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      {
        path: ':brand',
        children: [{
          path: 'home',
          component: HomeComponent
        }
        ]
      }
    ]
  },
  {path: '', redirectTo: `/${DEFAULT_LANG}/${DEFAULT_BRAND}/home`, pathMatch: 'full'}
];
