import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFormulasComponent } from './saved-formulas.component';

describe('SavedFormulasComponent', () => {
  let component: SavedFormulasComponent;
  let fixture: ComponentFixture<SavedFormulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedFormulasComponent]
    });
    fixture = TestBed.createComponent(SavedFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
