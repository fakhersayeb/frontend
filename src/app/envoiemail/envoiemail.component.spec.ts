import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiemailComponent } from './envoiemail.component';

describe('EnvoiemailComponent', () => {
  let component: EnvoiemailComponent;
  let fixture: ComponentFixture<EnvoiemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
