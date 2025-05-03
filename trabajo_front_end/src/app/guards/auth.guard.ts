import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const autenticacionServicio = inject(AuthService); //inject(AuthService) permite usar el servicio para preguntar si el usuario está logueado
  const router = inject(Router)

  if(!autenticacionServicio.isAuthenticated()){
    router.navigate(['']); //Redirecciona al Login
    return false;
  }
  return true;
};
