import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Transferencia {
  contaOrigem: string;
  contaDestino: string;
  valor: number;
  taxa: number;
  dataAgendamento: string;
  dataTransferencia: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private baseUrl = 'http://localhost:8080/transferencias';

  constructor(private http: HttpClient) {}

  getExtrato(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/extrato`);
  }

  agendarTransferencia(dados: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/agendar`, dados);
  }
}
