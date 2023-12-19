import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosEditarComponent } from './medicamentos-editar.component';

describe('MedicamentosEditarComponent', () => {
  let component: MedicamentosEditarComponent;
  let fixture: ComponentFixture<MedicamentosEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentosEditarComponent]
    });
    fixture = TestBed.createComponent(MedicamentosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
