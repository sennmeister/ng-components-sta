import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button01Theme } from '../../../core/enum';

@Component({
  selector: '[appButton02]',
  standalone: true,
  imports: [],
  templateUrl: './button02.component.html',
  styleUrl: './button02.component.sass',
})
export class Button02Component {
  @Input() label: string = '';
  public disabled?: boolean = false;
  public theme?: Button01Theme = Button01Theme.prime;

  @Output() buttonClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  public clicked($event: MouseEvent): void {
    this.buttonClick.emit($event);
  }
}
