import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ntap-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent {
  buttons = [
    {
      name: 'Todos'
    },
    {
      name: 'Lidos'
    },
    {
      name: 'Não Lidos'
    }
  ]

  @Output()
  filtered= new EventEmitter<string>()

  filter() {
    this.filtered.emit()
  }
  
  



}
