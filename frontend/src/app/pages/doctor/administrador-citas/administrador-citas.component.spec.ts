import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorCitasComponent } from './administrador-citas.component';

describe('AdministradorCitasComponent', () => {
  let component: AdministradorCitasComponent;
  let fixture: ComponentFixture<AdministradorCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
