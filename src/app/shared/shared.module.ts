import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nService} from './i18n/i18n.service';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [CommonModule, TranslateModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [I18nService]
    };
  }
}
