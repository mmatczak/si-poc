import {Injectable, OnDestroy} from '@angular/core';
import {translations} from './translations';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router} from '@angular/router';
import {RouterEvent} from '@angular/router/src/events';
import {elements} from './elements/elements';
import {BehaviorSubject} from 'rxjs';
import {Meta} from '@angular/platform-browser';
import {DEFAULT_BRAND, DEFAULT_LANG} from '../routing/routes';

@Injectable({
  providedIn: 'root'
})
export class I18nService implements OnDestroy {
  private eventsSubscription;
  private brand = DEFAULT_BRAND;
  private brandSubject = new BehaviorSubject('vw');
  brands$ = this.brandSubject.asObservable();

  constructor(private router: Router, private translate: TranslateService, private meta: Meta) {
  }

  getImages(): string {
    return elements[this.getCurrentLang()][this.brand].images;
  }

  configure() {
    const defaultLanguageKey = `${DEFAULT_LANG}-${DEFAULT_BRAND}`;

    this.translate.setTranslation('de-skoda', translations['de']['skoda']);
    this.translate.setTranslation('de-vw', translations['de']['vw']);
    this.translate.setDefaultLang(defaultLanguageKey);
    this.translate.use(defaultLanguageKey);
    this.observeLanguageAndBrandChanges();
  }

  private getCurrentLang() {
    return this.translate.currentLang;
  }

  private observeLanguageAndBrandChanges(): void {
    this.eventsSubscription = this.router.events.subscribe((routerEvent: RouterEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        const languageAndBrand = this.parseLanguageAndBrand(routerEvent.urlAfterRedirects);
        if (languageAndBrand) {
          if (this.brand !== languageAndBrand.brand) {
            this.brand = languageAndBrand.brand;
            this.brandSubject.next(this.brand);
          }
          const langKey = languageAndBrand.lang + '-' + languageAndBrand.brand;
          if (this.translate.currentLang !== langKey) {
            this.translate.use(langKey);
          }
        }
      }
    });
  }

  private parseLanguageAndBrand(url: string) {
    if (url) {
      const urlSegments = url.split('/');
      if (urlSegments && urlSegments.length >= 3) {
        return {
          lang: urlSegments[1],
          brand: urlSegments[2]
        };
      }
    }
  }

  ngOnDestroy(): void {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
  }
}


