import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosCienciaComponent } from './anios-ciencia.component';

describe('AniosCienciaComponent', () => {
  let component: AniosCienciaComponent;
  let fixture: ComponentFixture<AniosCienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniosCienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniosCienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
