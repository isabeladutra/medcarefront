import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarInternacoesComponent } from './criar-internacoes.component';

describe('CriarInternacoesComponent', () => {
  let component: CriarInternacoesComponent;
  let fixture: ComponentFixture<CriarInternacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarInternacoesComponent]
    });
    fixture = TestBed.createComponent(CriarInternacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
