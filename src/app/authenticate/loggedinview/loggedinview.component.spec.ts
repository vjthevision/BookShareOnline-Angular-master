import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinviewComponent } from './loggedinview.component';

describe('LoggedinviewComponent', () => {
  let component: LoggedinviewComponent;
  let fixture: ComponentFixture<LoggedinviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedinviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
