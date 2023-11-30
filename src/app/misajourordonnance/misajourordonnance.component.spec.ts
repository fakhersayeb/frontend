import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisajourordonnanceComponent } from './misajourordonnance.component';

describe('MisajourordonnanceComponent', () => {
  let component: MisajourordonnanceComponent;
  let fixture: ComponentFixture<MisajourordonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisajourordonnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisajourordonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
