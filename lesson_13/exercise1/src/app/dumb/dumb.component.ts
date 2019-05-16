import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `{{model.name}}  {{model.age}}`
})
export class DumbComponent {
  @Input() model;
}
