import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

// Configuración de locale de la app
import localEsCl from '@angular/common/locales/es-CL';
import localFrCa from '@angular/common/locales/fr-CA';
import localEnUs from '@angular/common/locales/en';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localEsCl );
registerLocaleData( localFrCa );
registerLocaleData( localEnUs );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
