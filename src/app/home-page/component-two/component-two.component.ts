import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentTwoComponent {
  constructor(public mockService: MockService) {}

  logOnChangedetection() {
    console.log('change in ComponentTwo');

    return true;
  }
}
