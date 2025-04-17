import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TransferService } from '../../services/transfer.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-transfer',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css',
})
export class TransferComponent implements OnInit {
  transferForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessages: string[] = [];
  isLoading = false;
  recentTransfers: any[] = [];

  userName = '';
  userType = '';
  userEmail = '';
  userBalance = '';
  userId: number = 1;
  constructor(
    private fb: FormBuilder,
    private transferService: TransferService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      recipientId: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')],
      ],
      amount: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')],
      ],
      description: [''],
    });
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

  get f() {
    return this.transferForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessages = [];
    this.successMessage = '';

    if (this.transferForm.invalid) {
      if (this.f['recipientId'].errors?.['required']) {
        this.errorMessages.push('Recipient ID is required.');
      }
      if (this.f['recipientId'].errors?.['pattern']) {
        this.errorMessages.push(
          'Recipient ID must only contain letters and numbers.'
        );
      }
      if (this.f['amount'].errors?.['required']) {
        this.errorMessages.push('Amount is required.');
      }
      if (this.f['amount'].errors?.['pattern']) {
        this.errorMessages.push('Amount must be a valid number.');
      }
      return;
    }

    this.isLoading = true;

    const formData = {
      recipientId: this.transferForm.value.recipientId,
      amount: +this.transferForm.value.amount,
      description: this.transferForm.value.description,
    };

    this.transferService.sendCoins(formData).subscribe({
      next: () => {
        this.successMessage = 'Transfer successful!';
        this.transferForm.reset();
        this.submitted = false;
        this.isLoading = false;

        setTimeout(() => {
          this.successMessage = '';
        }, 4000);
      },
      error: (err) => {
        this.errorMessages = ['Transfer failed. Please try again.'];
        this.isLoading = false;

        setTimeout(() => {
          this.errorMessages = [];
        }, 4000);

        console.error(err);
      },
    });
    this.getRecentTransfers(); // récupère au démarrage
  }
  getRecentTransfers(): void {
    this.transferService.getLastTransfers().subscribe({
      next: (transfers) => {
        this.recentTransfers = transfers;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des transferts récents', err);
      },
    });
  }
}
