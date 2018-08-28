import {BrowserModule} from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from './shared/shared.module';
import {I18nService} from './shared/i18n/i18n.service';
import {SiModule} from './si/si.module';
import {RouterModule} from '@angular/router';
import {routes} from './shared/routing/routes';
import {DOCUMENT} from '@angular/common';
import {brandCssFiles} from './shared/i18n/elements/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes),
    SiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static readonly BRAND_CSS_ID = 'brandCss';

  constructor(i18n: I18nService, @Inject(DOCUMENT) private document: any) {
    i18n.configure();
    i18n.brands$.subscribe(brand => {
      this.changeBrandCss(brand);
    });
  }

  private changeBrandCss(brand: string) {
    let linkElement: HTMLLinkElement = this.document.querySelector(`link#${AppModule.BRAND_CSS_ID}`);
    if (!linkElement) {
      linkElement = this.document.createElement('link');
      linkElement.setAttribute('id', AppModule.BRAND_CSS_ID);
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
    }
    linkElement.setAttribute('href', brandCssFiles[brand]);

    const head = this.document.querySelector('head');
    head.appendChild(linkElement);
  }
}
