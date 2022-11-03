import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLibComponent } from './config-lib.component';

describe('ConfigLibComponent', () => {
  let component: ConfigLibComponent;
  let fixture: ComponentFixture<ConfigLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});