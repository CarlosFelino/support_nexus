// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Agora vai funcionar pois routes está exportado

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
