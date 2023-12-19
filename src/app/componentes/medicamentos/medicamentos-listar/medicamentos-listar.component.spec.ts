import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosListarComponent } from './medicamentos-listar.component';

describe('MedicamentosListarComponent', () => {
  let component: MedicamentosListarComponent;
  let fixture: ComponentFixture<MedicamentosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentosListarComponent]
    });
    fixture = TestBed.createComponent(MedicamentosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
