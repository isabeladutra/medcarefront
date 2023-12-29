import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInternacaoComponent } from './listar-internacao.component';

describe('ListarInternacaoComponent', () => {
  let component: ListarInternacaoComponent;
  let fixture: ComponentFixture<ListarInternacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInternacaoComponent]
    });
    fixture = TestBed.createComponent(ListarInternacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
