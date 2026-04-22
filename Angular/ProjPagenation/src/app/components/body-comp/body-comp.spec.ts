import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComp } from './body-comp';

describe('BodyComp', () => {
  let component: BodyComp;
  let fixture: ComponentFixture<BodyComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyComp],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
