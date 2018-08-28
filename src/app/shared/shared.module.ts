import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nService} from './i18n/i18n.service';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import { SiAccordionComponent } from './components/si-accordion/si-accordion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SiAccordionComponent],
  exports: [CommonModule, TranslateModule, RouterModule, SiAccordionComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [I18nService]
    };
  }
}
