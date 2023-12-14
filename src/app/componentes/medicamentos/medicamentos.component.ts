import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit{

  formularioCadastroMedicamento!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.inicializarFormulario();
    
  }

  formulariomedicamento!: FormGroup;

  inicializarFormulario(): void {
    this.formulariomedicamento = this.formBuilder.group({
      nome: ['', Validators.required],
      prescricao: this.formBuilder.group({
        nomeMedicamento: ['', Validators.required],
        quantidade: [null, [Validators.required, Validators.min(1)]],
        dataPrescricao: ['', Validators.required],
      })
    });
  }
}
