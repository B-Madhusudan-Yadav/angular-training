import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  imports: [],
  templateUrl: './hello-component.component.html',
  styleUrl: './hello-component.component.css'
})
export class HelloComponentComponent {
  message: string = "Hello, MarketMoves!";

  showMessage(): void {
    alert(this.message)
  }

}
