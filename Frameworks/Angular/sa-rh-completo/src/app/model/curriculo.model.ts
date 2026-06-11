export class Curriculo {
  constructor(
    public id: any,
    public usuarioId: number,
    public nomeCompleto: string,
    public formacao: string,
    public experiencia: string,
    public habilidades: string,
    public linkedinUrl: string,
  ) {}
}
