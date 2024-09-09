import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunilgavaskarStadiumComponent } from './sunilgavaskar-stadium.component';

describe('SunilgavaskarStadiumComponent', () => {
  let component: SunilgavaskarStadiumComponent;
  let fixture: ComponentFixture<SunilgavaskarStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunilgavaskarStadiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunilgavaskarStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
