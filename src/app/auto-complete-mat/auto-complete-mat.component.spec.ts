import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteMatComponent } from './auto-complete-mat.component';

describe('AutoCompleteMatComponent', () => {
  let component: AutoCompleteMatComponent;
  let fixture: ComponentFixture<AutoCompleteMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompleteMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
