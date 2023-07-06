import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-loader/><app-message/><app-contracts-page/><router-outlet />'
})
export class AppComponent {
  title = 'BeautyHands';
}
