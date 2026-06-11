import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCurriculo } from './meu-curriculo';

describe('MeuCurriculo', () => {
  let component: MeuCurriculo;
  let fixture: ComponentFixture<MeuCurriculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuCurriculo],
    }).compileComponents();

    fixture = TestBed.createComponent(MeuCurriculo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
