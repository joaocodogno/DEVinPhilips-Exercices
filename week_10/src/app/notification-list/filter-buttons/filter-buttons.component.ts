import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ntap-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent {
  @Output()
  filtered= new EventEmitter<string>()

  filter(select: string) {
    console.log(`O tipo é ${select}`)
    this.filtered.emit(select)
  }
}
