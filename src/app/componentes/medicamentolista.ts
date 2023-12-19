export interface MedicamentoLista {
    paciente: {
        id: number;
        nome: string;
        idade: number;
        telefone: string;
        endereco: string;
        cpf: string;
        dataDenascimento: Date;
        celular: string;
        user: {
          id: number;
          email: string;
        };
      };
      listaPrescricao: {
        id: number;
        nomeMedicamento: string;
        quantidade: number;
        dataPrescricao: string;
        formattedDataPrescricao: string;
      }[];
}