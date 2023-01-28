import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deep-component',
  templateUrl: './deep-component.component.html',
  styleUrls: ['./deep-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeepComponentComponent {
  logOnChangedetection() {
    console.log("change in DeepComponent");

    return true
  }
}
