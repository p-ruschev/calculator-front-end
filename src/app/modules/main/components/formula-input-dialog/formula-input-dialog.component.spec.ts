import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaInputDialogComponent } from './formula-input-dialog.component';

describe('FormulaInputDialogComponent', () => {
  let component: FormulaInputDialogComponent;
  let fixture: ComponentFixture<FormulaInputDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaInputDialogComponent]
    });
    fixture = TestBed.createComponent(FormulaInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
