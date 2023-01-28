import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationManagerComponent } from './notification-manager.component';

describe('NotificationManagerComponent', () => {
  let component: NotificationManagerComponent;
  let fixture: ComponentFixture<NotificationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
