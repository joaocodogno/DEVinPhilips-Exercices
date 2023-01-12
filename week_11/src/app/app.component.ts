import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'a variavel esta com primeira letra minúscula, mas o pipe transforma a primeira em maiúscula'
}
