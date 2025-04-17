import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  imports: [NgClass, NgFor, CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) {}
  isLoading = true;

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.isLoading = true;

    this.notificationService.getNotifications().subscribe(
      (data) => {
        this.notifications = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erreur de récupération des notifications', error);
        this.isLoading = false;
      }
    );
  }
}
