import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceConfigComponent } from './price-config.component';

describe('PriceConfigComponent', () => {
  let component: PriceConfigComponent;
  let fixture: ComponentFixture<PriceConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
