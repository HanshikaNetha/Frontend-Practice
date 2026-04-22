import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenationComp } from './pagenation-comp';

describe('PagenationComp', () => {
  let component: PagenationComp;
  let fixture: ComponentFixture<PagenationComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenationComp],
    }).compileComponents();

    fixture = TestBed.createComponent(PagenationComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
