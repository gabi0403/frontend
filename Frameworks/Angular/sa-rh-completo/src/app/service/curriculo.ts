import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  // Garantindo a porta correta da sua API (3014)
  private apiUrl = 'http://localhost:3014/curriculos';

  constructor(private http: HttpClient) {}

  // GET - Listar todos (para a tela oculta painel-curriculo)
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  // POST - Criar currículo correto
  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  // PUT - Atualizar dados
  atualizarCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const urlAtualizado = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlAtualizado, curriculo);
  }

  // DELETE - Remover registro
  removerCurriculo(id: any): Observable<Curriculo[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(urlDeletar);
  }
}
