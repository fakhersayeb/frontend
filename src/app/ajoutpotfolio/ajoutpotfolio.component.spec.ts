import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpotfolioComponent } from './ajoutpotfolio.component';

describe('AjoutpotfolioComponent', () => {
  let component: AjoutpotfolioComponent;
  let fixture: ComponentFixture<AjoutpotfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpotfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutpotfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
