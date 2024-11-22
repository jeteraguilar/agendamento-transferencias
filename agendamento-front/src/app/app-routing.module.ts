import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: '**', redirectTo: '' } // Redirecionar para HomeComponent caso a rota não seja encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
