import { Component } from '@angular/core';
import { Button01Component } from './shared/components/button01/button01.component';
import { Button01Theme } from './core/enum';

import { Button02Component } from './shared/components/button02/button02.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Button01Component, Button02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  public Button01Theme = Button01Theme;
  public doSomething($event: MouseEvent): void {
    console.log($event);
  }
}
