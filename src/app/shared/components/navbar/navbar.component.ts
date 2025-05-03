import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileModalComponent } from '../modals/profile-modal/profile-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDropdownOpen = false;
  sidebarOpen = false; // Adicionado para controlar o menu lateral

  get currentUser() {
    return this.authService.currentUser();
  }

  constructor(
    public authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    // Implemente a lógica do menu lateral aqui
    console.log('Sidebar state:', this.sidebarOpen);
  }

  openProfileModal() {
    this.dialog.open(ProfileModalComponent, {
      width: '400px',
      data: { user: this.currentUser }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}