import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPruductosComponent } from './listado-pruductos.component';

describe('ListadoPruductosComponent', () => {
  let component: ListadoPruductosComponent;
  let fixture: ComponentFixture<ListadoPruductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPruductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPruductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
