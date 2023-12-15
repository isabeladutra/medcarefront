export interface Medicamento {
    nome: string;
    prescricoes: Prescricao[];
}
  
export interface Prescricao {
    nomeMedicamento: string;
    quantidade: number;
    dataPrescricao: string;
}