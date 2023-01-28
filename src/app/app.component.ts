import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notificationsCount = 10;

  updateNotificationCount(count:number) {
    this.notificationsCount = count;
  }

}
