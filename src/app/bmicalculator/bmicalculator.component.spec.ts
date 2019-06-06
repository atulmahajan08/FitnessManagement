import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmicalculatorComponent } from './bmicalculator.component';

describe('BmicalculatorComponent', () => {
  let component: BmicalculatorComponent;
  let fixture: ComponentFixture<BmicalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmicalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmicalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
