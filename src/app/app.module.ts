import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { NotificationButtonComponent } from './notification-button/notification-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponent,
    NotificationButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
