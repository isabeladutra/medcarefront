import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalMedicamentosComponent } from './pagina-principal-medicamentos.component';

describe('PaginaPrincipalMedicamentosComponent', () => {
  let component: PaginaPrincipalMedicamentosComponent;
  let fixture: ComponentFixture<PaginaPrincipalMedicamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalMedicamentosComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
