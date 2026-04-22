import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComp } from './search-comp';

describe('SearchComp', () => {
  let component: SearchComp;
  let fixture: ComponentFixture<SearchComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComp],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
