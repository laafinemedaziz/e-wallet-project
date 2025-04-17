import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycoinsComponent } from './buycoins.component';

describe('BuycoinsComponent', () => {
  let component: BuycoinsComponent;
  let fixture: ComponentFixture<BuycoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuycoinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuycoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
