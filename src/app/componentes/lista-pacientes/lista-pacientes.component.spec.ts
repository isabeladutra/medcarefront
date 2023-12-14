import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPacientesComponent } from './lista-pacientes.component';

describe('ListaPacientesComponent', () => {
  let component: ListaPacientesComponent;
  let fixture: ComponentFixture<ListaPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPacientesComponent]
    });
    fixture = TestBed.createComponent(ListaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
