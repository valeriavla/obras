import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosInstitucionesComponent } from './anios-instituciones.component';

describe('AniosInstitucionesComponent', () => {
  let component: AniosInstitucionesComponent;
  let fixture: ComponentFixture<AniosInstitucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniosInstitucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniosInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
