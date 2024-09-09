import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyorkStadiumComponent } from './newyork-stadium.component';

describe('NewyorkStadiumComponent', () => {
  let component: NewyorkStadiumComponent;
  let fixture: ComponentFixture<NewyorkStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewyorkStadiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewyorkStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
