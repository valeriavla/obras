import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosEducacionComponent } from './anios-educacion.component';

describe('AniosEducacionComponent', () => {
  let component: AniosEducacionComponent;
  let fixture: ComponentFixture<AniosEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniosEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniosEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
