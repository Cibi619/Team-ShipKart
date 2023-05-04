import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDtlsComponent } from './product-dtls.component';

describe('ProductDtlsComponent', () => {
  let component: ProductDtlsComponent;
  let fixture: ComponentFixture<ProductDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
