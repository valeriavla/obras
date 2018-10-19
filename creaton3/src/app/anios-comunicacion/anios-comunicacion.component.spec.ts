import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosComunicacionComponent } from './anios-comunicacion.component';

describe('AniosComunicacionComponent', () => {
  let component: AniosComunicacionComponent;
  let fixture: ComponentFixture<AniosComunicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniosComunicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniosComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
