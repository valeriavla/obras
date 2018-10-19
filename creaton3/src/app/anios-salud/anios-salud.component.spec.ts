import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosSaludComponent } from './anios-salud.component';

describe('AniosSaludComponent', () => {
  let component: AniosSaludComponent;
  let fixture: ComponentFixture<AniosSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniosSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniosSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
