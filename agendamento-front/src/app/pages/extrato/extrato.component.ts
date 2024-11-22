import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  displayedColumns: string[] = ['contaOrigem', 'contaDestino', 'valor', 'taxa', 'dataAgendamento', 'dataTransferencia'];
  transferencias: any[] = [];

  constructor(private transferenciaService: TransferenciaService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.transferenciaService.getExtrato().subscribe({
      next: (data) => this.transferencias = data,
      error: () => alert('Erro ao carregar o extrato.')
    });
  }

  voltar() {
    this.location.back();  // Volta para a tela anterior
  }
}
