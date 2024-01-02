import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInternacaoComponent } from './editar-internacao.component';

describe('EditarInternacaoComponent', () => {
  let component: EditarInternacaoComponent;
  let fixture: ComponentFixture<EditarInternacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarInternacaoComponent]
    });
    fixture = TestBed.createComponent(EditarInternacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
