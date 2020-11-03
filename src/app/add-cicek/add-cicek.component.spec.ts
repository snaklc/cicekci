import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCicekComponent } from './add-cicek.component';

describe('AddCicekComponent', () => {
  let component: AddCicekComponent;
  let fixture: ComponentFixture<AddCicekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCicekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCicekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
