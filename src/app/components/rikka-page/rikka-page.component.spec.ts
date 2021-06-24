import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikkaPageComponent } from './rikka-page.component';

describe('RikkaPageComponent', () => {
  let component: RikkaPageComponent;
  let fixture: ComponentFixture<RikkaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RikkaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikkaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
