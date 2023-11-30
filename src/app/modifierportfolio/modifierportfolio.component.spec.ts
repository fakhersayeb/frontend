import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierportfolioComponent } from './modifierportfolio.component';

describe('ModifierportfolioComponent', () => {
  let component: ModifierportfolioComponent;
  let fixture: ComponentFixture<ModifierportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
