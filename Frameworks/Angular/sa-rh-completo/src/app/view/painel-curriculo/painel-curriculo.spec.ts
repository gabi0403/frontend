import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCurriculo } from './painel-curriculo';

describe('PainelCurriculo', () => {
  let component: PainelCurriculo;
  let fixture: ComponentFixture<PainelCurriculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelCurriculo],
    }).compileComponents();

    fixture = TestBed.createComponent(PainelCurriculo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
