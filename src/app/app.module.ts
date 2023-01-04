import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsInitializerService } from './services/settings-initializer.service';

export function initSettings(
  settingsInitializerService: SettingsInitializerService,
) {
  return () => settingsInitializerService.initializeSettings();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initSettings,
      deps: [SettingsInitializerService],
      multi: true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
