import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, NgClass]
})
export class NavbarComponent implements OnInit {
  isSystemPage: boolean = false;
  user = {
    nome: 'Carlos Alexandre', // Mockado - substitua pelo dado real
    email: 'carlos@fatec.sp.gov.br',
    foto: 'assets/images/avatars/carlos.png'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isSystemPage = !['/', '/login'].includes(event.url);
      });
  }

  toggleSidebar() {
    // Lógica para abrir/fechar sidebar (implemente conforme necessidade)
    console.log('Sidebar toggled');
  }
}
