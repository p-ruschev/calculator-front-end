
import { Component,OnInit, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Expression } from '../../../models/expression.model';

@Component({
  selector: 'app-estimations',
  templateUrl: './estimations.component.html',
  styleUrls: ['./estimations.component.scss']
})
export class EstimationsComponent implements OnInit {
  @Input() history!: Expression[];
  @Input() isLogged!: boolean;
  @Input() searchValue!: string;
  @Output() onSaveEstimation = new EventEmitter<Expression>();

  filteredHistory!: Expression[];
  menuOpened: boolean = false;

  ngOnInit(): void {
    this.filteredHistory = this.history;
  }

  saveEstimation(estimation: Expression): void {
    this.onSaveEstimation.emit(estimation);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchValue']) {
      this.filteredHistory = this.history.filter((el: Expression) => {
        if (el.input?.join('').includes(this.searchValue)) {
          return true;
        }

        if (el.result?.toString().includes(this.searchValue)) {
          return true;
        }

        return false;
      })
    }

    if (changes['history']) {
      this.filteredHistory = this.history;
    }
  }

  handleHover(el: HTMLElement): void {
    el['hidden'] = this.menuOpened ? !el['hidden']: el['hidden'];
    this.menuOpened = !this.menuOpened;
  }

}
