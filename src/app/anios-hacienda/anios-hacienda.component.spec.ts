import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosHaciendaComponent } from './anios-hacienda.component';

describe('AniosHaciendaComponent', () => {
  let component: AniosHaciendaComponent;
  let fixture: ComponentFixture<AniosHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniosHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniosHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
