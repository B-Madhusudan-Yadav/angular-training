import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello-component',
  imports: [ FormsModule ],
  templateUrl: './hello-component.component.html',
  styleUrl: './hello-component.component.css'
})
export class HelloComponentComponent {
  message: string = "Hello, MarketMoves!";
  imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  
  showMessage(): void {
    alert(this.message)
  }

  showAlert(): void {
    alert("Button Clicked!")
  }


}
