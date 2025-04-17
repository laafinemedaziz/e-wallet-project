import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emailsent',
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './emailsent.component.html',
  styleUrl: './emailsent.component.css',
})
export class EmailsentComponent {
  resetStatus: boolean = false;
  errorMessage: string = 'user n' + 'a pas de compte';
  messageStatus: 'success' | 'error' | null = null;
  messageText: string | null = null;
  email: string = ''; // Champ email pour lier le formulaire

  constructor(private authService: AuthService) {}
}
