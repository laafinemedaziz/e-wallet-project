import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DashboardService } from '../../services/dashboard.service';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // transactions: any[] = [];

  tndAmount: number = 10; // Montant en TND
  ctAmount: number = 50; // Montant en CT

  convertToCT(): void {
    const conversionRate = 0.2; // 1 TND = 0.2 CT
    this.ctAmount = this.tndAmount * conversionRate;
  }

  userName = '';
  userType = '';
  userEmail = '';
  userBalance = '';
  userId: number = 1;
  transactions: any[] = [];

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userIdString = localStorage.getItem('userId');
    if (userIdString) {
      const id = +userIdString;
      this.authService.getUserById(id).subscribe({
        next: (user) => {
          console.log('Utilisateur récupéré :', user);
          this.userId = user.id;
          this.userName = user.name;
          this.userType = user.type;
          this.userEmail = user.email;
          this.userBalance = user.balance;

          // ✅ Récupérer les 3 dernières transactions
          this.dashboardService
            .getRecentTransactionsByUserId(this.userId)
            .subscribe({
              next: (transactions) => {
                this.transactions = transactions;
                console.log('Dernières transactions :', this.transactions);
              },
              error: (err) => {
                console.error(
                  'Erreur lors de la récupération des transactions :',
                  err
                );
              },
            });
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du user :', err);
        },
      });
    }
  }

  triggerSeeAll() {
    this.router.navigate(['/user/transactions']);
  }
  goToBuyCoins() {
    this.router.navigate(['/user/buyCoins']);
  }

  goToTransfer() {
    this.router.navigate(['/user/transfer']);
  }

  goToTransactions() {
    this.router.navigate(['/user/transactions']);
  }
}
