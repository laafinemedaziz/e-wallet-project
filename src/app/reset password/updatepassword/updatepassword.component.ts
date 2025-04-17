import { CommonModule, Location, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { UpdatepasswordService } from '../../services/updatepassword.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-updatepassword',
  imports: [NgClass, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './updatepassword.component.html',
  styleUrl: './updatepassword.component.css',
})
export class UpdatepasswordComponent {
  passwordForm: FormGroup;
  submitted = false;
  showNew = false;
  showConfirm = false;
  passwordCriteria = {
    minLength: false,
    upperCase: false,
    lowerCase: false,
    number: false,
  };

  constructor(
    private fb: FormBuilder,
    private UpdatepasswordService: UpdatepasswordService,
    private location: Location
  ) {
    this.passwordForm = this.fb.group({
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/[A-Z]/),
          Validators.pattern(/[a-z]/),
          Validators.pattern(/[0-9]/),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });

    this.passwordForm.get('newPassword')?.valueChanges.subscribe((value) => {
      this.passwordCriteria.minLength = value.length >= 8;
      this.passwordCriteria.upperCase = /[A-Z]/.test(value);
      this.passwordCriteria.lowerCase = /[a-z]/.test(value);
      this.passwordCriteria.number = /\d/.test(value);
    });
  }

  onSubmit() {
    this.submitted = true;

    // Vérification si le formulaire est valide et si les mots de passe correspondent
    if (
      this.passwordForm.valid &&
      this.passwordForm.controls['newPassword'].value ===
        this.passwordForm.controls['confirmPassword'].value
    ) {
      const newPassword = this.passwordForm.controls['newPassword'].value;

      // Appel au service pour mettre à jour le mot de passe
      this.UpdatepasswordService.updatePassword(newPassword).subscribe(
        (response) => {
          console.log('Mot de passe mis à jour avec succès!', response);
          // Optionnel: Afficher un message de succès à l'utilisateur
        },
        (error) => {
          console.log('Erreur lors de la mise à jour du mot de passe:', error);
          // Optionnel: Afficher un message d'erreur à l'utilisateur
        }
      );
    } else {
      console.log(
        'Formulaire invalide ou les mots de passe ne correspondent pas'
      );
    }
  }

  onCancel() {
    // Réinitialisation ou annulation du formulaire
    this.passwordForm.reset();
    this.submitted = false;
  }

  toggleShowNewPassword() {
    this.showNew = !this.showNew;
  }

  toggleShowConfirmPassword() {
    this.showConfirm = !this.showConfirm;
  }
  goBack(): void {
    this.location.back();
  }
}
