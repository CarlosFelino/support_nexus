import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  email: string;
  photoUrl: string;  // Adicione esta linha
  isAdmin: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  [x: string]: any;
  currentUser = signal<User | null>(null);  // Signal com tipo User ou null

  login(email: string, isAdmin: boolean, photoUrl?: string) {
    this.currentUser.set({
      email,
      isAdmin,
      photoUrl: photoUrl || 'assets/default-user.png'  // Valor padrão
    });
  }

  logout() {
    this.currentUser.set(null);
  }

  isLoggedIn() {
    return this.currentUser() !== null;
  }
}

function logout() {
  throw new Error('Function not implemented.');
}


function isLoggedIn() {
  throw new Error('Function not implemented.');
}
