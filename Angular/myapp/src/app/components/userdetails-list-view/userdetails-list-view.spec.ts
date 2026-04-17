import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsListView } from './userdetails-list-view';

describe('UserdetailsListView', () => {
  let component: UserdetailsListView;
  let fixture: ComponentFixture<UserdetailsListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdetailsListView],
    }).compileComponents();

    fixture = TestBed.createComponent(UserdetailsListView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
