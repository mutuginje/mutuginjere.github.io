import {Component, Directive, EventEmitter, Input, NgModule, Output} from '@angular/core';

@Component({
  selector: 'test-cmp',
  template: 'Name: <ng-template><input [(ngModel)]="name"></ng-template>',
})
export class TestCmp {
  name: string = '';
}

@Directive({selector: '[ngModel]'})
export class NgModelDirective {
  @Input() ngModel: string = '';
  @Output() ngModelChanges: EventEmitter<string> = new EventEmitter();
}

@NgModule({declarations: [TestCmp, NgModelDirective]})
export class AppModule {
}
