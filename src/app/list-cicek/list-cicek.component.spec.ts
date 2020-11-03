import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCicekComponent } from './list-cicek.component';

describe('ListCicekComponent', () => {
  let component: ListCicekComponent;
  let fixture: ComponentFixture<ListCicekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCicekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCicekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
