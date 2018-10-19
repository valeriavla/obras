import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosSeguridadComponent } from './anios-seguridad.component';

describe('AniosSeguridadComponent', () => {
  let component: AniosSeguridadComponent;
  let fixture: ComponentFixture<AniosSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniosSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniosSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
