import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // {
    //   provide: InMemoryRepo,
    //   useClass: InMemoryRepo
    // },
    // InMemoryRepo
  ]
};
