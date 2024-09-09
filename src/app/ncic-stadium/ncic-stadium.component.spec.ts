import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcicStadiumComponent } from './ncic-stadium.component';

describe('NcicStadiumComponent', () => {
  let component: NcicStadiumComponent;
  let fixture: ComponentFixture<NcicStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcicStadiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcicStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
