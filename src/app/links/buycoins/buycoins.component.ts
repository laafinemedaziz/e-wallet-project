import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-buycoins',
  imports: [CommonModule, FormsModule],
  templateUrl: './buycoins.component.html',
  styleUrl: './buycoins.component.css',
})
export class BuyCoinsComponent implements OnInit {
  userName = '';
  userType = '';
  userEmail = '';
  userBalance = '';
  userId: number = 1;
  constructor(private authservice: AuthService) {}
  ngOnInit(): void {
    const userIdString = localStorage.getItem('userId');
    if (userIdString) {
      const id = +userIdString;
      this.authservice.getUserById(id).subscribe({
        next: (user) => {
          console.log('Utilisateur récupéré :', user); // <= ici
          this.userId = user.id;
          this.userName = user.name;
          this.userType = user.type;
          this.userEmail = user.email;
          this.userBalance = user.balance;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du user :', err);
        },
      });
    }
  }

  showModal: boolean = false;
  coinAmount: number = 0.0;
  totalPrice: number = 0;

  openModal() {
    this.showModal = true; // Ouvre le modal
  }

  closeModal() {
    this.showModal = false; // Ferme le modal
  }

  calculateTotal() {
    // Exemple de calcul du total
    this.totalPrice = this.coinAmount * 0.5; // Par exemple, chaque coin coûte 0.5 Dinars
  }
}
