import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteremailComponent } from './enteremail.component';

describe('EnteremailComponent', () => {
  let component: EnteremailComponent;
  let fixture: ComponentFixture<EnteremailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnteremailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnteremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
