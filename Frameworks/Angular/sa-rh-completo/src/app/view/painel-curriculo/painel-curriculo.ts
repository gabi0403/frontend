import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curriculo } from '../../model/curriculo.model';
import { CurriculoService } from '../../service/curriculo';

@Component({
  selector: 'app-painel-curriculo',
  imports: [FormsModule],
  templateUrl: './painel-curriculo.html',
  styleUrl: './painel-curriculo.scss',
})
export class PainelCurriculo implements OnInit {
  public curriculos: Curriculo[] = [];
  public curriculo: Curriculo = new Curriculo(0, 1, '', '', '', '', '');

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this._curriculoService.getCurriculos().subscribe((resposta) => {
      this.curriculos = resposta.map(
        (e) =>
          new Curriculo(
            e.id,
            e.usuarioId,
            e.nomeCompleto,
            e.formacao,
            e.experiencia,
            e.habilidades,
            e.linkedinUrl,
          ),
      );
    });
  }

  selecionarCurriculo(curriculo: Curriculo): void {
    this.curriculo = curriculo;
  }

  atualizarCurriculo(id: any): void {
    this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(() => {
      this.curriculo = new Curriculo(0, 1, '', '', '', '', '');
      this.listarCurriculos();
      alert('Currículo Atualizado com Sucesso');
    });
  }

  excluirCurriculo(id: any): void {
    this._curriculoService.removerCurriculo(id).subscribe(() => {
      this.curriculo = new Curriculo(0, 1, '', '', '', '', '');
      this.listarCurriculos();
      alert('Currículo Excluído da Base de Dados');
    });
  }
}
