import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponsiveComponent } from './reponsive.component';

describe('ReponsiveComponent', () => {
  let component: ReponsiveComponent;
  let fixture: ComponentFixture<ReponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReponsiveComponent]
    });
    fixture = TestBed.createComponent(ReponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
