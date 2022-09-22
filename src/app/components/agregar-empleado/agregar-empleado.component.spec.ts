import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEmpleadoComponent } from './agregar-empleado.component';

describe('AgregarEmpleadoComponent', () => {
  let component: AgregarEmpleadoComponent;
  let fixture: ComponentFixture<AgregarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
