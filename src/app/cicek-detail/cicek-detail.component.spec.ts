import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicekDetailComponent } from './cicek-detail.component';

describe('CicekDetailComponent', () => {
  let component: CicekDetailComponent;
  let fixture: ComponentFixture<CicekDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicekDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicekDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
