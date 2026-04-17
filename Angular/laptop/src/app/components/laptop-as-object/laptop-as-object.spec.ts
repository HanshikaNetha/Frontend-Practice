import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopAsObject } from './laptop-as-object';

describe('LaptopAsObject', () => {
  let component: LaptopAsObject;
  let fixture: ComponentFixture<LaptopAsObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopAsObject],
    }).compileComponents();

    fixture = TestBed.createComponent(LaptopAsObject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
