import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
// importar locales
import { AppRoutingModule } from './app-routing.module';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { AppComponent } from './app.component';
import { USE_VALUE } from '@angular/core/src/di/injector';
import { DomsegurosPipe } from './pipes/domseguros.pipe';
import { ContraseniaPipe } from './pipes/contrasenia.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomsegurosPipe,
    ContraseniaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
