import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierrendezvousComponent } from './modifierrendezvous.component';

describe('ModifierrendezvousComponent', () => {
  let component: ModifierrendezvousComponent;
  let fixture: ComponentFixture<ModifierrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierrendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
