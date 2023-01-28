import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ComponentOneComponent {
  logOnChangedetection() {
    console.log("change in ComponentOne");
    return true
  }
}
