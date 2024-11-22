import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';

import { MatTableModule } from '@angular/material/table';  // Importando o módulo da tabela
import { MatPaginatorModule } from '@angular/material/paginator'; // Se precisar de paginação
import { MatSortModule} from '@angular/material/sort'; // Se precisar de ordenação
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    HomeComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
