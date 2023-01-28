import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-notification-manager',
  templateUrl: './notification-manager.component.html',
  styleUrls: ['./notification-manager.component.css']
})
export class NotificationManagerComponent {
  @Input()
  count:number = 0
  @Output()
  countChange=new EventEmitter<number>()

  addNotification() {
    this.count++;
    this.countChange.emit(this.count)
  }
  removeNotification() {
    if(this.count == 0) {
      return;
    }
    this.count--;
    this.countChange.emit(this.count)
  }
  resetCount() {
    this.count = 0
    this.countChange.emit(this.count)
  }


}
