import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  isSystemPage = false;
  user = {
    nome: 'Carlos Alexandre',
    email: 'carlos@fatec.sp.gov.br',
    foto: 'assets/images/default-avatar.png' // Imagem padrão
  };

  // Lista de rotas onde o navbar completo aparece
  private systemRoutes = ['/admin', '/professor'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isSystemPage = this.systemRoutes.some(route => 
          event.urlAfterRedirects.startsWith(route)
        );
      });
  }

  toggleSidebar() {
    // Implemente a lógica do sidebar aqui
    console.log('Sidebar toggled');
  }
}