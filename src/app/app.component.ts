import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,headerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Learning';
}
