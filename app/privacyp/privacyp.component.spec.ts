import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypComponent } from './privacyp.component';

describe('PrivacypComponent', () => {
  let component: PrivacypComponent;
  let fixture: ComponentFixture<PrivacypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacypComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
