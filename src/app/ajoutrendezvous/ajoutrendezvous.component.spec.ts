import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrendezvousComponent } from './ajoutrendezvous.component';

describe('AjoutrendezvousComponent', () => {
  let component: AjoutrendezvousComponent;
  let fixture: ComponentFixture<AjoutrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutrendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
