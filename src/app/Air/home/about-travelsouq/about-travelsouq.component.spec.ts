import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTravelsouqComponent } from './about-travelsouq.component';

describe('AboutTravelsouqComponent', () => {
  let component: AboutTravelsouqComponent;
  let fixture: ComponentFixture<AboutTravelsouqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTravelsouqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTravelsouqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
