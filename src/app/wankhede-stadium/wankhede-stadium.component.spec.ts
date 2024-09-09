import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WankhedeStadiumComponent } from './wankhede-stadium.component';

describe('WankhedeStadiumComponent', () => {
  let component: WankhedeStadiumComponent;
  let fixture: ComponentFixture<WankhedeStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WankhedeStadiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WankhedeStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
