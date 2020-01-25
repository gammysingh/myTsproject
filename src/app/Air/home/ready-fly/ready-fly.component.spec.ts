import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyFlyComponent } from './ready-fly.component';

describe('ReadyFlyComponent', () => {
  let component: ReadyFlyComponent;
  let fixture: ComponentFixture<ReadyFlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyFlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
