import { Component } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent {
  transferencia = {
  contaOrigem: '',
  contaDestino: '',
  valor: null,
  dataTransferencia: '',
  dataAgendamento: new Date().toISOString().split('T')[0],
  taxa: 0
  }

  constructor(private transferenciaService: TransferenciaService, private location: Location,private router: Router) { }

    agendar() {
    this.transferenciaService.agendarTransferencia(this.transferencia).subscribe({
      next: (response) => {
        alert('Transferência agendada com sucesso!');
        this.router.navigate(['/extrato']);
      },
      error: (err) => {
        alert('Erro ao agendar a transferência.');
      }
    });
  }

  voltar() {
    this.location.back();  // Volta para a tela anterior
  }
}
