import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaEmployeesComponent } from './ima-employees.component';

describe('ImaEmployeesComponent', () => {
  let component: ImaEmployeesComponent;
  let fixture: ComponentFixture<ImaEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
