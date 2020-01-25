import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersStoreComponent } from './offers-store.component';

describe('OffersStoreComponent', () => {
  let component: OffersStoreComponent;
  let fixture: ComponentFixture<OffersStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
