import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomePageComponent {
  logOnChangedetection() {
    console.log("change in HomePageComponent");

    return true
  }
}
