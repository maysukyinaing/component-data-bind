import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.css']
})
export class NotificationButtonComponent {
  @Input()
  count:number = 0;
}
