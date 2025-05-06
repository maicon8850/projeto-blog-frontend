import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UsuarioService } from '../../services/usuario.service';

// Ícones do @ng-icons
import {
  bootstrapGithub,
  bootstrapInstagram,
  bootstrapLinkedin
} from '@ng-icons/bootstrap-icons';
import {
  NgIconComponent,
  provideIcons,
  provideNgIconsConfig
} from '@ng-icons/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIconComponent], // IMPORTA O COMPONENTE
  providers: [
    UsuarioService,
    provideIcons({
      bootstrapGithub,
      bootstrapLinkedin
    }),
    provideNgIconsConfig({
      size: '1.25rem' // você pode ajustar o tamanho como quiser
    })
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public usuarioService: UsuarioService) { }

  ngOnInit() {}

  logout() {
    environment.id = 0;
    environment.nome = '';
    environment.usuario = '';
    environment.senha = '';
    environment.foto = '';
    environment.token = '';
    this.router.navigate(['/']);
  }
}
