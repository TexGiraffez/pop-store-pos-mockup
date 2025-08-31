import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosPage } from './pos-page';

describe('PosPage', () => {
  let component: PosPage;
  let fixture: ComponentFixture<PosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
