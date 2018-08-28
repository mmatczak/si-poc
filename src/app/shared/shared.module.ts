import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nService} from './i18n/i18n.service';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import { SiAccordionComponent } from './components/si-accordion/si-accordion.component';
import {ReactiveFormsModule} from '@angular/forms';
import { WithErrorMsgComponent } from './components/with-error-msg/with-error-msg.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SiAccordionComponent, WithErrorMsgComponent],
  exports: [CommonModule, TranslateModule, RouterModule, SiAccordionComponent, ReactiveFormsModule, WithErrorMsgComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [I18nService]
    };
  }
}
