import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    return true; // L'utilisateur est authentifié, on autorise l'accès à la route
  } else {
    router.navigate(['/login']); // Si pas de token, redirige vers la page de login
    return false; // L'accès est refusé
  }
};
