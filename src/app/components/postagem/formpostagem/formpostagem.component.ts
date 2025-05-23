import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogRef, DialogService } from '@ngneat/dialog';
import { environment } from '../../../../environments/environment';
import { Postagem } from '../../../models/Postagem';
import { Tema } from '../../../models/Tema';
import { Usuario } from '../../../models/Usuario';
import { AlertService } from '../../../services/alert.service';
import { PostagemService } from '../../../services/postagem.service';
import { TemaService } from '../../../services/tema.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-formpostagem',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    PostagemService,
    TemaService,
    UsuarioService,
    DialogService,
  ],
  templateUrl: './formpostagem.component.html',
  styleUrl: './formpostagem.component.css'
})
export class FormpostagemComponent implements OnInit {

  listaTemas: Tema[]
  tema: Tema = new Tema
  temaId: number = 0

  usuarioId: number = environment.id
  usuario: Usuario = new Usuario

  postagem: Postagem = new Postagem()
  postagemId: number = 0

  isLoading: boolean = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    @Optional() public ref: DialogRef
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.alertService.info('', "Token Inválido!")
      this.router.navigate(['/'])
    }

    this.postagemId = this.route.snapshot.params['id']

    if (this.postagemId) {
      this.getPostagemById()
    }

    this.getAllTemas()
  }

  getPostagemById() {
    this.postagemService.getById(this.postagemId).subscribe((resposta: Postagem) => {
      this.postagem = resposta
      this.temaId = resposta.tema.id
    })
  }

  getTemaById() {
    console.log(this.temaId)
    this.temaService.getById(this.temaId).subscribe((resposta: Tema) => {
      this.tema = resposta
    })
  }

  getUsuarioById() {
    this.usuarioService.getById(this.usuarioId).subscribe((resposta: Usuario) => {
      this.usuario = resposta
    })
  }

  getAllTemas() {
    this.temaService.getAll().subscribe((resposta: Tema[]) => {
      this.listaTemas = resposta
    })
  }


  
  cadastrarPostagem() {

    this.postagem.tema = { id: this.temaId } as Tema
    this.postagem.usuario = { id: this.usuarioId } as Usuario
  
    this.postagemService.post(this.postagem).subscribe({
      next: (resposta: Postagem) => {
        this.postagem = resposta
        this.alertService.sucesso('', 'Postagem Cadastrada com sucesso!')
        if (this.ref) {
          this.ref.close()
        }
        this.router.navigate(['/postagens'])
      },
      error: (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            this.alertService.erro('', 'Erro de Validação!')
            break
          case 403:
            this.alertService.erro('', 'Token Inválido!')
            this.router.navigate([''])
            break
          default:
            this.alertService.erro('', 'Erro ao Cadastrar a Postagem')
        }
      }
    })
  }
  

  atualizarPostagem(){

    this.tema.id = this.temaId
    this.postagem.tema = this.tema

    this.usuario.id = this.usuarioId
    this.postagem.usuario = this.usuario

    console.log(this.postagem)

    this.postagemService.put(this.postagem).subscribe({
      next: (resposta: Postagem) => {
        this.postagem = resposta;
        this.alertService.sucesso('', 'Postagem Atualizada com sucesso!')
        if (this.ref) {
          this.ref.close();
        }
        this.router.navigate(['/postagens'])
      },
      error: (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            this.alertService.erro('', 'Erro de Validação!')
            break;
          case 403:
            this.alertService.erro('', 'Token Inválido!')
            this.router.navigate([''])
            break;
          default:
            this.alertService.erro('', 'Erro ao Atualizar a Postagem')
        }
      }
    })

  }

  submitPostagem(){

    if (this.postagem.id) {
      this.atualizarPostagem()
    } else {
      this.cadastrarPostagem()
    }
  }

  hasTema(){
    if(this.temaId !== 0)
      return false
    else
      return true
  }


}