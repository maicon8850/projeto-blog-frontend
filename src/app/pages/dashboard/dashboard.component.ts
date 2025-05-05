import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/Postagem';
import { RouterLink } from '@angular/router';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  totalPostagens: number = 0
  ultimasPostagens: Postagem[] = []
  postagensPorAutor: { [autor: string]: number } = {}

  constructor(private postagemService: PostagemService) {}

  ngOnInit(): void {
    this.carregarPostagens()
  }

  carregarPostagens() {
    this.postagemService.getAll().subscribe((postagens: Postagem[]) => {
      this.totalPostagens = postagens.length
      this.ultimasPostagens = postagens.slice(-5).reverse()
      this.postagensPorAutor = this.agruparPorAutor(postagens)
      this.gerarGrafico()
    })
  }

  agruparPorAutor(postagens: Postagem[]) {
    const agrupado: { [autor: string]: number } = {}
    postagens.forEach(post => {
      const autor = post.usuario?.nome || 'Desconhecido'
      agrupado[autor] = (agrupado[autor] || 0) + 1
    })
    return agrupado
  }

  gerarGrafico() {
    const canvas: any = document.getElementById('chartAutor')
    const ctx = canvas.getContext('2d')

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(this.postagensPorAutor),
        datasets: [{
          label: 'Postagens por Autor',
          data: Object.values(this.postagensPorAutor),
          backgroundColor: 'rgba(79, 70, 229, 0.6)', // indigo-600
          borderColor: 'rgba(79, 70, 229, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

}
