import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() public caption: string = '';
  @Output() public checkboxChange: EventEmitter<boolean> = new EventEmitter();

  public onCheckboxChange($event: any): void {
    this.checkboxChange.emit($event.checked);
  }
}
