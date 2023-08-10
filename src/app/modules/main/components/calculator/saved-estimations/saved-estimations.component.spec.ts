import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedEstimationsComponent } from './saved-estimations.component';

describe('SavedEstimationsComponent', () => {
  let component: SavedEstimationsComponent;
  let fixture: ComponentFixture<SavedEstimationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedEstimationsComponent]
    });
    fixture = TestBed.createComponent(SavedEstimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
