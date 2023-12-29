export interface InternacaoLista {
    id: number;
    detalhesInternacaoList: DetalhesInternacao[];
    nomePaciente: string;
  }
  
  export interface DetalhesInternacao {
    dataEntradaInternacao: string;
    dataSaidaInternacao: string;
    nomeHospital: string;
    motivoInternacao: string;
  }
  