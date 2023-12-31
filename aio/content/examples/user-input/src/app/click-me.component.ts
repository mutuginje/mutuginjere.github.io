/* FOR DOCS ... MUST MATCH ClickMeComponent template
// #docregion click-me-button
  <button type="button" (click)="onClickMe()">Click me!</button>
// #enddocregion click-me-button
*/

// #docregion
import {Component} from '@angular/core';

// #docregion click-me-component
@Component({
  standalone: true,
  selector: 'app-click-me',
  template: ` <button type="button" (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}`,
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
// #enddocregion click-me-component
