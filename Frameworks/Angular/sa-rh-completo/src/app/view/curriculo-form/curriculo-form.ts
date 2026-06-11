import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curriculo } from '../../model/curriculo.model';
import { CurriculoService } from '../../service/curriculo';

@Component({
  selector: 'app-curriculo-form',
  imports: [FormsModule],
  templateUrl: './curriculo-form.html',
  styleUrl: './curriculo-form.scss',
})
export class CurriculoForm {
  // Objeto para Interpolação (Simulando o usuarioId como 1)
  public curriculo: Curriculo = new Curriculo(0, 1, '', '', '', '', '');

  constructor(private _curriculoService: CurriculoService) {}

  cadastrarCurriculo(): void {
    if (
      this.curriculo.nomeCompleto === '' ||
      this.curriculo.formacao === '' ||
      this.curriculo.experiencia === '' ||
      this.curriculo.habilidades === ''
    ) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(() => {
      this.curriculo = new Curriculo(0, 1, '', '', '', '', ''); // Limpa o formulário
      alert('Seu currículo foi cadastrado com sucesso!');
    });
  }
}
