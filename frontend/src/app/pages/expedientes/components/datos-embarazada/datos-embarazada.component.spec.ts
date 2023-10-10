import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEmbarazadaComponent } from './datos-embarazada.component';

describe('DatosEmbarazadaComponent', () => {
  let component: DatosEmbarazadaComponent;
  let fixture: ComponentFixture<DatosEmbarazadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEmbarazadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosEmbarazadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
