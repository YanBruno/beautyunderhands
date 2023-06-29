import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-loader/><app-message/><router-outlet />'
})
export class AppComponent {
  title = 'BeautyHands';
}
