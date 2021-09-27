import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndividualBookComponent } from './show-individual-book.component';

describe('ShowIndividualBookComponent', () => {
  let component: ShowIndividualBookComponent;
  let fixture: ComponentFixture<ShowIndividualBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIndividualBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIndividualBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
